import './mantra.css';
import { Target, Flag, Heart } from 'lucide-react';

export default function Mantra() {
    return (
        <section className="mantra-section" id="about" aria-label="Brand statement">
            <div className="mantra--overlay__mobile"></div>
            <div className="title--container--mantra">
                <h2>OUR MISSION</h2>
                <h2 className="mantra-title">TO HELP YOU IMPROVE, PERFORM AND OVERCOME EVERY DAY.</h2>
            </div>
            <div className="features--container--mantra">
                <div className="feature--mantra">
                    <div className="icon--mantra">
                        <Target size={50} strokeWidth={1} color="#c88a58"/>
                    </div>
                    <div className="text--mantra">
                        <h3>PERFORMANCE</h3>
                        <p>Formulated to support your strength, focus and endurance.</p>
                    </div>
                </div>
                <div className="feature--mantra">
                    <div className="icon--mantra">
                        <Flag size={50} strokeWidth={1} color="#c88a58"/>
                    </div>
                    <div className="text--mantra">
                        <h3>DISCIPLINE</h3>
                        <p>Made for those who show up, every single day.</p>
                    </div>
                </div>
                <div className="feature--mantra">
                    <div className="icon--mantra">
                        <Heart size={50} strokeWidth={1} color="#c88a58"/>
                    </div>
                    <div className="text--mantra">
                        <h3>BALANCE</h3>
                        <p>Clean nutrition that fits your lifestyle.</p>
                    </div>
                </div>
            </div>
            <div className="footer--container--mantra">
                <div className="right--mantra">
                    <p>
                        WE DON'T FOLLOW TRENDS.
                        <br />
                        WE BUILD WHAT WORKS.
                    </p>
                </div>
                <div className="left--mantra">
                    <p>
                        Thank you for being part of the IPO movement.
                        <br /> <br />
                        Improve. Perform. Overcome.
                    </p>
                </div>
            </div>
        </section>
    );
}
