// src/sections/hero/hero.tsx
// import React from 'react';
import './hero.css';
import HeroBackgroundImage from '../../assets/images/fundo_secao_hero.png';
// import HeroBackgroundVideo from '../../assets/videos/video_fundo_hero.mp4';
import { Zap, Droplet, Sprout } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            {/* Video background */}
            <div className="hero-background__desktop">
                <img src={HeroBackgroundImage} alt="Hero background image" className='hero--image__desktop' />
                {/* <video src={HeroBackgroundVideo} className='hero--video--desktop' muted autoPlay></video> */}

                {/* This one is just to darken the background and add contrast, which is why it's commented out. */}
                {/* <div className="hero-overlay"></div> */}
            </div>
            <div className="hero-background__mobile">
                {/* <img src={HeroBackgroundImage} alt="Hero background image" className='hero--image--mobile' /> */}
                {/* <video src={HeroBackgroundVideo} className='hero--video--mobile'></video> */}

                {/* This one is just to darken the background and add contrast, which is why it's commented out. */}
                {/* <div className="hero-overlay"></div> */}
            </div>

            {/* Main content */}
            <div className="hero-content">
                {/* Left column - Bar image */}
                <div className='content-left'>
                    <span className="hero-badge-top">NEW</span>
                    <h1 className="hero-title">
                        PERFOMANCE<br />
                        IN EVERY CHOICE
                    </h1>
                    <span className="hero-badge-bottom">The protein bar with creatine developed to elevate your training and your routine.</span>
                    <button className='hero--button'>
                        <span>DISCOVER THE BAR</span>
                        <span>⌵</span>
                    </button>
                </div>

                {/* Right column - Text */}
                <div className="content-right">
                    <ul className='features--list'>
                        <li className='feature--item'>
                            <div className='feature--image'>
                                <Zap size={50} strokeWidth={1.5} color="#c88a58" />
                            </div>
                            <div className='feature--texts'>
                                <h3>ENERGY</h3>
                                <p>More power for your training.</p>
                            </div>
                        </li>
                        <li className='feature--item'>
                            <div className='feature--image'>
                                <Droplet size={50} strokeWidth={1.5} color="#c88a58" />
                            </div>
                            <div className='feature--texts'>
                                <h3>Recovery</h3>
                                <p>Pure creatine for better results.</p>
                            </div>
                        </li>
                        <li className='feature--item'>
                            <div className='feature--image'>
                                <Sprout size={50} strokeWidth={1.5} color="#c88a58" />
                            </div>
                            <div className='feature--texts'>
                                <h3>QUALITY</h3>
                                <p>Carefully selected ingredients. Sugar free. Glutten-free.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}