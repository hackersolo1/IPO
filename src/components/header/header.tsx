import './header.css';
import IPOLogo from '../../assets/images/logo_ipo.png';

export default function Header() {
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
                        <li>
                            <a href="" className='nav--link nav__active'>BARS</a>
                        </li>
                        <li>
                            <a href="" className='nav--link'>OUR FORMULA</a>
                        </li>
                        <li>
                            <a href="" className='nav--link'>ABOUT</a>
                        </li>
                        <li>
                            <a href="" className='nav--link'>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="button--container">
                    <button>SHOP NOW</button>
                </div>
            </div>
        </header>
    )
}