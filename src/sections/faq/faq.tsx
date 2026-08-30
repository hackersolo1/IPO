// faq.tsx
import './faq.css';
import { ChevronDown, Truck, Lock, Award, Users } from 'lucide-react';
import { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FaqItem[] = [
        {
            question: "WHAT IS IPO CREATINE BAR?",
            answer: "IPO Creatine Bar is a premium performance bar that combines 20g of protein with 5g of creatine in a single, convenient 60g bar. No powder, no shaker, no extra steps."
        },
        {
            question: "WHO IS IPO FOR?",
            answer: "IPO is for anyone who wants to perform better — athletes, executives, founders, HYROX competitors, runners, cyclists, and high performers of all kinds."
        },
        {
            question: "HOW MUCH CREATINE DOES IT CONTAIN?",
            answer: "Each IPO bar contains 5g of creatine monohydrate — a full daily dose of the most researched performance supplement in the world."
        },
        {
            question: "DOES IT CONTAIN SUGAR?",
            answer: "No, IPO bars are sugar-free. We use only clean, functional ingredients that serve a purpose. Nothing is in here without a reason."
        },
        {
            question: "IS IPO GLUTEN FREE?",
            answer: "Yes, IPO bars are 100% gluten free. We believe performance nutrition should be accessible to everyone."
        },
        {
            question: "WHEN IS THE BEST TIME TO EAT IPO?",
            answer: "IPO fits perfectly into your daily performance protocol. Enjoy it pre-workout for energy, post-workout for recovery, or as part of your daily routine."
        },
        {
            question: "HOW SHOULD I STORE THE BAR?",
            answer: "Store IPO bars in a cool, dry place. For best results, keep them away from direct sunlight and heat."
        },
        {
            question: "WHERE CAN I BUY IPO?",
            answer: "IPO bars are available for purchase directly on our website with fast shipping across Europe. Secure payments and premium quality, made for athletes."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq" aria-label="Frequently asked questions">
            <div className="faq-header">
                <h2>FAQ</h2>
                <h1>EVERYTHING YOU NEED TO KNOW ABOUT IPO.</h1>
            </div>

            <div className="faq-grid">
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question">
                                <span>{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    strokeWidth={1.5}
                                    className={`faq-chevron ${openIndex === index ? 'rotated' : ''}`}
                                />
                            </div>
                            <div className={`faq-answer ${openIndex === index ? 'expanded' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-contact">
                    <h3>HAVE MORE QUESTIONS?</h3>
                    <p>We're here to help.</p>
                    <p className="contact-detail">Contact us at support@ipo.bar or DM us on Instagram @ipo.bar</p>
                </div>
            </div>

            <div className="footer--container--faq">
                <div className="footer-feature">
                    <Truck size={28} strokeWidth={1} color="#c88a58" />
                    <div>
                        <h4>FAST SHIPPING</h4>
                        <p>ACROSS EUROPE</p>
                    </div>
                </div>
                <div className="footer-feature">
                    <Lock size={28} strokeWidth={1} color="#c88a58" />
                    <div>
                        <h4>SECURE</h4>
                        <p>PAYMENTS</p>
                    </div>
                </div>
                <div className="footer-feature">
                    <Award size={28} strokeWidth={1} color="#c88a58" />
                    <div>
                        <h4>PREMIUM</h4>
                        <p>QUALITY</p>
                    </div>
                </div>
                <div className="footer-feature">
                    <Users size={28} strokeWidth={1} color="#c88a58" />
                    <div>
                        <h4>MADE FOR</h4>
                        <p>ATHLETES</p>
                    </div>
                </div>
            </div>
        </section>
    );
}