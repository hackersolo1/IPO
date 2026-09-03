import './routine.css';
import { Zap, Timer, BarChart3 } from 'lucide-react';

export default function Routine() {
    return (
        <section className="routine-section" id="formula" aria-labelledby="routine-title">
            <div className="routine--overlay__mobile"></div>
            <div className="routine-mobile-image" aria-hidden="true"></div>
            <div className="routine-container">
                <div className="title--container">
                    <h2>OUR FORMULA</h2>
                    <h1>
                        CREATINE.
                        <br />
                        BUILT FOR MORE.
                    </h1>
                    <p>Creatine is one of the most researched and effective supplements to suport strength, <span>performance</span> and <span>recovery</span>.</p>
                </div>
                <div className="features--container--routine">
                    <div className="feature--routine">
                        <div className="icon">
                            <Zap size={50} strokeWidth={1} color="#c88a58"/>
                        </div>
                        <div className="texts">
                            <h3>MORE STRENGTH</h3>
                            <p>Helps you push harder and lift more</p>
                        </div>
                    </div>
                    <div className="feature--routine">
                        <div className="icon">
                            <Timer size={50} strokeWidth={1} color="#c88a58"/>
                        </div>
                        <div className="texts">
                            <h3>FASTER RECOVERY</h3>
                            <p>Supports your muscles so you're ready for more</p>
                        </div>
                    </div>
                    <div className="feature--routine">
                        <div className="icon">
                            <BarChart3 size={50} strokeWidth={1} color="#c88a58"/>
                        </div>
                        <div className="texts">
                            <h3>DAILY IMPACT</h3>
                            <p>Small dose. Big results. Every single day</p>
                        </div>
                    </div>
                </div>
                <div className="footer--container--routine">
                    <div className="footer--text--routine">
                        <p>5G OF CREATINE IN EVERY BAR. PURE. EFFECTIVE. EVERYDAY</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
