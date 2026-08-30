// header.tsx
import './header.css';
import IPOLogo from '../../assets/images/logo_ipo.png';
import { useState, useEffect } from 'react';

export default function Header() {
    const [activeLink, setActiveLink] = useState('BARS');

    const navItems = [
        { id: 'BARS', label: 'BARS', sectionId: 'product' },
        { id: 'FORMULA', label: 'OUR FORMULA', sectionId: 'formula' },
        { id: 'ABOUT', label: 'ABOUT', sectionId: 'about' },
        { id: 'FAQ', label: 'FAQ', sectionId: 'faq' }
    ];

    const handleNavClick = (itemId: string, sectionId: string) => {
        setActiveLink(itemId);

        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 100;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Optional: Update active link on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => ({
                id: item.id,
                element: document.getElementById(item.sectionId)
            }));

            const scrollPosition = window.scrollY + 120;

            for (const section of sections) {
                if (section.element) {
                    const top = section.element.offsetTop;
                    const height = section.element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveLink(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    return (
        <header>
            <div className='header--container'>
                <div className="title--container">
                    <img src={IPOLogo} alt="IPO Logo for header" className='logo--image' />
                    <p className='logo--p'>
                        <span>IMPROVE.</span>
                        <span>PERFORM.</span>
                        <span>OVERCOME</span>
                    </p>
                </div>
                <div className="nav--container">
                    <ul className='nav--list__flex'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.sectionId}`}
                                    className={`nav--link ${activeLink === item.id ? 'nav__active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.id, item.sectionId);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="button--container">
                    <button onClick={() => {
                        document.getElementById('product')?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",    
                            inline: "nearest"
                        });
                    }}>SHOP NOW</button>
                </div>
            </div>
        </header>
    );
}