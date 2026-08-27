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
                            <li><s>Protein powder scoop</s></li>
                            <li><s>Creatine scoop</s></li>
                            <li><s>Shaker bottle</s></li>
                            <li><s>Water &amp; mixing</s></li>
                            <li><s>Cleaning &amp; prep time</s></li>
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
