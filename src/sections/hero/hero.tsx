import './hero.css';
// import barVideo from '../../assets/videos/barra-girando.mp4';
import fundoSecaoHero from '../../assets/images/fundo_secao_hero.jpg'

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-image-mobile" aria-hidden="true">
                <img src={fundoSecaoHero} alt="" />
            </div>

            <div className="hero-content">
                <div className="hero-image-column" aria-hidden="true">
                    <img src={fundoSecaoHero} alt="" />
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
