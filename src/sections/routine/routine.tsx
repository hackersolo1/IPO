import './routine.css';

export default function Routine() {
    return (
        <section className="routine-section" id="routine" aria-labelledby="routine-title">
            <div className="routine-container">
                <h2 className="routine-title" id="routine-title">
                    YOUR ROUTINE, OPTIMIZED.
                </h2>

                <div className="routine-grid">
                    <article className="routine-panel routine-panel-muted">
                        <h3>
                            TRADITIONAL
                            <br />
                            PROTOCOL
                        </h3>
                        <ul>
                            <li>Protein powder scoop</li>
                            <li>Creatine scoop</li>
                            <li>Shaker bottle</li>
                            <li>Water &amp; mixing</li>
                            <li>Cleaning &amp; prep time</li>
                        </ul>
                    </article>

                    <article className="routine-panel routine-panel-highlight">
                        <h3>THE IPO SYSTEM</h3>
                        <p className="routine-kicker">GRAB. CONSUME. PERFORM.</p>
                        <ul>
                            <li>1x IPO Creatine Bar</li>
                            <li>0 powders, 0 shakers, 0 friction</li>
                            <li>Instant performance protocol</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
