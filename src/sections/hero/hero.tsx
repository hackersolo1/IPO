// src/sections/hero/hero.tsx
// import React from 'react';
import './hero.css';
import { Zap, Droplet, Sprout } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            <div className="hero--overlay__mobile"></div>
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
                </div>

                {/* Right column - Text */}
                <div className="content-right">
                    <ul className='features--list'>
                        <li className='feature--item'>
                            <div className='feature--image'>
                                <Zap size={50} strokeWidth={1} color="#c88a58" />
                            </div>
                            <div className='feature--texts'>
                                <h3>ENERGY</h3>
                                <p>More power for your training.</p>
                            </div>
                        </li>
                        <li className='feature--item'>
                            <div className='feature--image'>
                                <Droplet size={50} strokeWidth={1} color="#c88a58" />
                            </div>
                            <div className='feature--texts'>
                                <h3>Recovery</h3>
                                <p>Pure creatine for better results.</p>
                            </div>
                        </li>
                        <li className='feature--item'>
                            <div className='feature--image'>
                                <Sprout size={50} strokeWidth={1} color="#c88a58" />
                            </div>
                            <div className='feature--texts'>
                                <h3>QUALITY</h3>
                                <p>Carefully selected ingredients. Sugar free. Glutte free.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer--section">
                <div className="features--container">
                    <div className="feature">
                        <h3>20g</h3>
                        <span>PROTEIN</span>
                    </div>
                    <div className="feature">
                        <h3>5g</h3>
                        <span>CREATINE</span>
                    </div>
                    <div className="feature">
                        <h3>0g</h3>
                        <span>SUGAR</span>
                    </div>
                    <div className="feature">
                        <h3>220</h3>
                        <span>CALORIES</span>
                    </div>
                </div>
            </div>
        </section>
    );
}