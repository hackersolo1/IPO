import './hero.css';
import barVideo from '../../assets/videos/barra-girando.mp4';

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-video-mobile" aria-hidden="true">
                <video autoPlay loop muted playsInline preload="metadata">
                    <source src={barVideo} type="video/mp4" />
                </video>
            </div>

            <div className="hero-content">
                <div className="hero-video-column" aria-hidden="true">
                    <video className="hero-video-desktop" autoPlay loop muted playsInline preload="metadata">
                        <source src={barVideo} type="video/mp4" />
                    </video>
                </div>

                <div className="hero-text-backdrop" aria-hidden="true" />

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
