// product.tsx
import './product.css';
import { Minus, Plus, Star, Truck, Lock, ShieldCheck, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Product() {
    const [quantity, setQuantity] = useState(1);
    const [selectedPack, setSelectedPack] = useState<'1' | '6' | '12'>('1');

    const packPrices = {
        '1': 4.00,
        '6': 22.00,
        '12': 40.00
    };

    const packSavings = {
        '1': 0,
        '6': 8,
        '12': 17
    };

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const totalPrice = (packPrices[selectedPack] * quantity).toFixed(2);

    return (
        <section className="product-section" id="product" aria-label="IPO Creatine Bar product">
            <div className="product-container">
                <div className="product-image">
                    <div className="product-badge">IPO</div>
                </div>

                <div className="product-info">
                    <div className="product-header">
                        <h2>IPO CREATINE BAR</h2>
                        <h1>CHOCOLATE FLAVOUR</h1>
                        <div className="product-rating">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#c88a58" color="#c88a58" />
                                ))}
                            </div>
                            <span>4.8 (320 reviews)</span>
                        </div>
                    </div>

                    <p className="product-description">
                        The perfect balance of protein and creatine to support strength, recovery and everyday performance.
                    </p>

                    <div className="pack-selector">
                        <h3>CHOOSE YOUR PACK</h3>
                        <div className="pack-options">
                            <button
                                className={`pack-option ${selectedPack === '1' ? 'active' : ''}`}
                                onClick={() => setSelectedPack('1')}
                            >
                                <span className="pack-name">1 BAR</span>
                                <span className="pack-price">€{packPrices['1'].toFixed(2)}</span>
                            </button>
                            <button
                                className={`pack-option ${selectedPack === '6' ? 'active' : ''}`}
                                onClick={() => setSelectedPack('6')}
                            >
                                <span className="pack-name">6 BARS</span>
                                <span className="pack-price">€{packPrices['6'].toFixed(2)}</span>
                                <span className="pack-save">Save {packSavings['6']}%</span>
                            </button>
                            <button
                                className={`pack-option ${selectedPack === '12' ? 'active' : ''}`}
                                onClick={() => setSelectedPack('12')}
                            >
                                <span className="pack-name">12 BARS</span>
                                <span className="pack-price">€{packPrices['12'].toFixed(2)}</span>
                                <span className="pack-save">Save {packSavings['12']}%</span>
                            </button>
                        </div>
                    </div>

                    <div className="quantity-selector">
                        <h3>QUANTITY</h3>
                        <div className="quantity-controls">
                            <button
                                className="qty-btn"
                                onClick={() => handleQuantityChange(-1)}
                                disabled={quantity <= 1}
                            >
                                <Minus size={18} strokeWidth={1.5} />
                            </button>
                            <span className="qty-value">{quantity}</span>
                            <button
                                className="qty-btn"
                                onClick={() => handleQuantityChange(1)}
                            >
                                <Plus size={18} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    <button className="add-to-cart">
                        ADD TO CART · €{totalPrice}
                    </button>

                    <div className="product-features">
                        <div className="feature-item">
                            <Truck size={20} strokeWidth={1.5} color="#c88a58" />
                            <div>
                                <h4>Fast delivery</h4>
                                <p>2-4 business days</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Lock size={20} strokeWidth={1.5} color="#c88a58" />
                            <div>
                                <h4>Secure payment</h4>
                                <p>100% protected</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <ShieldCheck size={20} strokeWidth={1.5} color="#c88a58" />
                            <div>
                                <h4>Satisfaction guarantee</h4>
                                <p>30-day returns</p>
                            </div>
                        </div>
                    </div>

                    <div className="product-footer">
                        <p>We ship to Belgium, Netherlands, France, Germany and more.</p>
                        <a href="mailto:hello@ipo-nutrition.com" className="contact-link">
                            Questions? Contact us at hello@ipo-nutrition.com
                            <ChevronRight size={16} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}