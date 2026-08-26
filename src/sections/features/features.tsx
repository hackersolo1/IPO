// src/sections/features/features.tsx
// import React from 'react';
import './features.css';

export default function Features() {
    return (
        <section className="features-section" id="features">
            <div className="features-container">
                {/* Título */}
                <h2 className="features-title">BUILT FOR PEAK OUTPUT</h2>

                {/* Grid de benefícios */}
                <div className="features-grid">
                    {/* Card 1 - Proteína */}
                    <div className="feature-card">
                        <span className="feature-number">20G</span>
                        <span className="feature-label">PROTEIN</span>
                        <p className="feature-description">
                            Supports lean<br />
                            muscle repair,<br />
                            growth, and<br />
                            continuous<br />
                            recovery.
                        </p>
                    </div>

                    {/* Card 2 - Creatina */}
                    <div className="feature-card">
                        <span className="feature-number">5G</span>
                        <span className="feature-label">CREATINE<br />MONOHYDRATE</span>
                        <p className="feature-description">
                            Daily clinical dose<br />
                            for cellular energy,<br />
                            strength, and<br />
                            power output.
                        </p>
                    </div>

                    {/* Card 3 - Zero Friction */}
                    <div className="feature-card">
                        <span className="feature-number">1BAR</span>
                        <span className="feature-label">ZERO<br />FRICTION</span>
                        <p className="feature-description">
                            No powders.<br />
                            No shakers.<br />
                            No extra steps.<br />
                            Pure execution.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}