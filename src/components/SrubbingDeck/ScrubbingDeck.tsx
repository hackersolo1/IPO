// src/components/SrubbingDeck/ScrubbingDeck.tsx
import { useState, useEffect, useRef } from 'react';

// Define the interfaces for the props
interface ScrubbingDeckProps {
  totalFrames?: number;
  framePattern?: string;
  frameUrls?: string[];
  canvasWidth?: number;
  canvasHeight?: number;
  scrollStartId?: string;
  scrollEndId?: string;
  desktopMouseScrub?: boolean;
  fadeScrollRange?: number;
  opacityFadeRange?: number;
  exitFadeRange?: number;
  minOpacity?: number;
  progressEaseMobile?: number;
  progressEaseDesktop?: number;
  containerStyle?: React.CSSProperties;
  canvasClassName?: string;
  canvasStyle?: React.CSSProperties;
  placeholderHeight?: string;
}

export default function ScrubbingDeck({
  totalFrames = 98,
  framePattern = '/assets/sequence/frame_{index}.webp',
  frameUrls,
  canvasWidth = 720,
  canvasHeight = 1280,
  scrollStartId = 'hero',
  scrollEndId = 'features',
  desktopMouseScrub = true,
  fadeScrollRange = 120,
  opacityFadeRange = 600,
  exitFadeRange = 220,
  minOpacity = 0.12,
  progressEaseMobile = 0.22,
  progressEaseDesktop = 0.12,
  containerStyle = {},
  canvasClassName = '',
  canvasStyle = {},
  placeholderHeight = '350px'
}: ScrubbingDeckProps) {
  const [scrollY, setScrollY] = useState<number>(0);
  const [mounted] = useState<boolean>(true);
  const [rect, setRect] = useState<{ top: number; left: number; width: number; height: number }>({
    top: 0,
    left: 0,
    width: 0,
    height: 0
  });

  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; active: boolean }>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    active: false
  });
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const currentProgressRef = useRef<number>(0);

  // Helper to format frame numbers (e.g. index 5 -> '005')
  const formatIndex = (idx: number): string => {
    return String(idx).padStart(3, '0');
  };

  // Get scroll progress mapped between start and end element
  const getScrollProgress = (): number => {
    if (typeof document === 'undefined') return 0;
    const startEl = document.getElementById(scrollStartId);
    const endEl = document.getElementById(scrollEndId);
    if (!startEl || !endEl) return 0;

    const startTop = startEl.offsetTop;
    const endTop = endEl.offsetTop;
    const scrollRange = endTop - startTop;
    if (scrollRange <= 0) return 0;

    const currentScroll = window.scrollY - startTop;
    return Math.min(1.0, Math.max(0.0, currentScroll / scrollRange));
  };

  // Draw specific frame index onto the canvas
  const drawFrame = (progress: number): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.floor(progress * (totalFrames - 1))));
    const img = imagesRef.current[frameIndex];
    if (img) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    }
  };

  // Preload all WebP sequence frames in parallel batches
  useEffect(() => {
    let isMounted = true;
    const preload = async (): Promise<void> => {
      const urls: string[] = frameUrls?.length
        ? frameUrls.slice(0, totalFrames)
        : Array.from({ length: totalFrames }, (_, i) => {
          const indexStr = formatIndex(i + 1);
          return framePattern.replace('{index}', indexStr);
        });

      if (urls.length === 0) return;

      // Load first frame immediately for immediate draw
      const firstImg = new Image();
      firstImg.src = urls[0];
      await new Promise<void>((resolve) => {
        firstImg.onload = () => {
          if (isMounted) {
            imagesRef.current[0] = firstImg;
            drawFrame(0);
          }
          resolve();
        };
        firstImg.onerror = () => resolve();
      });

      // Load rest of frames in sequential batches of 12 to avoid network saturation
      const batchSize = 12;
      for (let i = 1; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        await Promise.all(batch.map((url, idx) => {
          const frameIdx = i + idx;
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
              if (isMounted) {
                imagesRef.current[frameIdx] = img;
              }
              resolve();
            };
            img.onerror = () => resolve();
          });
        }));
      }
    };

    preload();
    return () => {
      isMounted = false;
    };
  }, [totalFrames, framePattern, frameUrls]);

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialize scroll positions
    currentProgressRef.current = getScrollProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollStartId, scrollEndId]);

  // Track desktop mouse coordinates for scrubbing
  useEffect(() => {
    if (!desktopMouseScrub) return;

    const handleMouseMove = (e: MouseEvent): void => {
      const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 1024;
      if (isMobileDevice) return;

      mouseRef.current = {
        x: e.clientX,
        active: true
      };
    };

    const handleMouseLeave = (): void => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [desktopMouseScrub]);

  // Continuous animation frame loop
  useEffect(() => {
    const animate = (): void => {
      const scrollProgress = getScrollProgress();
      // Apply power curve so first scroll ticks trigger immediate advance
      const scrollCurve = Math.pow(scrollProgress, 0.7);

      let targetProgress = scrollCurve;
      const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 1024;

      if (!isMobileDevice && desktopMouseScrub && mouseRef.current.active) {
        // Fade out mouse coordinate scrubbing over scroll range
        const mouseInfluence = Math.max(0, 1 - (window.scrollY / fadeScrollRange));
        const mouseProgress = mouseRef.current.x / window.innerWidth;
        targetProgress = (scrollCurve * (1 - mouseInfluence)) + (mouseProgress * mouseInfluence);
      }

      // Butter-smooth ease on mobile, standard smooth ease on desktop
      const progressEase = isMobileDevice ? progressEaseMobile : progressEaseDesktop;
      currentProgressRef.current += (targetProgress - currentProgressRef.current) * progressEase;
      drawFrame(currentProgressRef.current);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [desktopMouseScrub, fadeScrollRange, progressEaseMobile, progressEaseDesktop]);

  // Measure placeholder container dimensions
  useEffect(() => {
    if (!mounted) return;

    const updateRect = (): void => {
      if (placeholderRef.current) {
        const r = placeholderRef.current.getBoundingClientRect();
        setRect({
          top: r.top,
          left: r.left,
          width: r.width,
          height: r.height
        });
      }
    };

    updateRect();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });

    const timer = setTimeout(updateRect, 150);

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
      clearTimeout(timer);
    };
  }, [mounted]);

  // Interpolations
  const transitionProgress = Math.min(1, Math.max(0, scrollY / 250));
  const opacityProgress = Math.min(1, Math.max(0, scrollY / opacityFadeRange));
  const endSectionTop = typeof document !== 'undefined'
    ? document.getElementById(scrollEndId)?.offsetTop ?? Number.POSITIVE_INFINITY
    : Number.POSITIVE_INFINITY;
  const exitStart = endSectionTop - exitFadeRange;
  const exitProgress = exitFadeRange > 0
    ? Math.min(1, Math.max(0, (scrollY - exitStart) / exitFadeRange))
    : scrollY >= endSectionTop ? 1 : 0;
  const isBackground = scrollY > 125;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const initialWidth = isMobile ? (rect.width || window.innerWidth) : 960;
  const initialHeight = isMobile ? (rect.height || 260) : 850;

  const containerWidth = initialWidth + transitionProgress * (window.innerWidth - initialWidth);
  const containerHeight = initialHeight + transitionProgress * (window.innerHeight - initialHeight);

  const startLeft = rect.left + rect.width / 2 - (initialWidth / 2);
  const startTop = rect.top + rect.height / 2 - (initialHeight / 2);

  const containerLeft = startLeft * (1 - transitionProgress);
  const containerTop = startTop * (1 - transitionProgress);

  const zIndex = scrollY > 125 ? 1 : 5;
  const currentOpacity = (1 - opacityProgress * (1 - minOpacity)) * (1 - exitProgress);

  const renderCanvas = () => {
    return (
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className={canvasClassName}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          opacity: currentOpacity,
          pointerEvents: 'none',
          ...canvasStyle
        }}
      />
    );
  };

  return (
    <>
      {/* Placement placeholder in document stream */}
      <div
        ref={placeholderRef}
        style={{
          position: 'relative',
          width: '100%',
          height: placeholderHeight,
          visibility: mounted && rect.width > 0 ? 'hidden' : 'visible',
          zIndex: 5
        }}
      >
        {(!mounted || rect.width === 0) && renderCanvas()}
      </div>

      {/* Floating fixed viewport portal */}
      {mounted && rect.width > 0 && (
        <div
          style={{
            position: 'fixed',
            left: containerLeft,
            top: containerTop,
            width: containerWidth,
            height: containerHeight,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: zIndex,
            pointerEvents: 'none',
            overflow: isBackground ? 'hidden' : 'visible',
            transition: isMobile
              ? 'none'
              : 'left 0.35s cubic-bezier(0.25, 1, 0.5, 1), top 0.35s cubic-bezier(0.25, 1, 0.5, 1), width 0.35s cubic-bezier(0.25, 1, 0.5, 1), height 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
            ...containerStyle
          }}
        >
          {renderCanvas()}
        </div>
      )}
    </>
  );
}