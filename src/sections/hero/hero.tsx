// src/sections/hero/hero.tsx
// import React from 'react';
import './hero.css';
import { useEffect, useRef } from "react";
import ScrubbingDeck from '../../components/SrubbingDeck/ScrubbingDeck';

const frameModules = import.meta.glob('../../assets/videos/frames_versao_4/*.webp', {
    eager: true,
    query: '?url',
    import: 'default',
}) as Record<string, string>;

const frameUrls = Object.entries(frameModules)
    .sort(([a], [b]) => {
        const frameNumber = (path: string) => Number(path.match(/frame_(\d+)\.webp$/)?.[1] ?? 0);
        return frameNumber(a) - frameNumber(b);
    })
    .map(([, url]) => url);

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            {/* Background com vídeo */}
            <div className="hero-background__desktop">
                <ScrubbingDeck
                    totalFrames={frameUrls.length}
                    frameUrls={frameUrls}
                    canvasWidth={720}
                    canvasHeight={1280}
                    scrollStartId="hero"
                    scrollEndId="features"
                    placeholderHeight="1px"
                    desktopMouseScrub={true}
                    fadeScrollRange={100}
                    opacityFadeRange={600}
                    exitFadeRange={660}
                    minOpacity={0.1}
                    progressEaseDesktop={0.12}
                    progressEaseMobile={0.22}
                    containerStyle={{
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 1,
                    }}
                    canvasStyle={{
                        // width: '100%',
                        // height: '100%',
                        width: '30%',
                        objectFit: 'cover',
                        mixBlendMode: 'screen',
                    }}
                />
                <div className="hero-overlay"></div>
            </div>
            <div className="hero-background__mobile">
                <ScrubbingDeck
                    totalFrames={frameUrls.length}
                    frameUrls={frameUrls}
                    canvasWidth={720}
                    canvasHeight={1280}
                    scrollStartId="hero"
                    scrollEndId="features"
                    placeholderHeight="1px"
                    desktopMouseScrub={true}
                    fadeScrollRange={100}
                    opacityFadeRange={600}
                    exitFadeRange={660}
                    minOpacity={0.1}
                    progressEaseDesktop={0.12}
                    progressEaseMobile={0.22}
                    containerStyle={{
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 1,
                    }}
                    canvasStyle={{
                        width: '100%',
                        height: '100%',                       
                        objectFit: 'cover',
                        mixBlendMode: 'screen',
                    }}
                />
                <div className="hero-overlay"></div>
            </div>

            {/* Conteúdo principal */}
            <div className="hero-content">
                {/* Coluna esquerda - Imagem da barra */}
                {/* <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                </div> */}

                {/* Coluna direita - Texto */}
                <div className="content-right">
                    <span className="hero-badge-top">DAILY PERFORMANCE PROTOCOL</span>
                    <h1 className="hero-title">
                        IMPROVE.<br />
                        PERFORM.<br />
                        OVERCOME.
                    </h1>
                    <span className="hero-badge-bottom">20g protein. 5g creatine. One bar.</span>
                </div>
            </div>
        </section>
    );
}