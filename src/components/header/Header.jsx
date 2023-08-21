import {FaBars, FaTimes} from 'react-icons/fa'
import {useRef} from 'react'
import logo from '../../assets/images/logo.png'
import flag from '../../assets/images/flag.png'
import './Header.scss'
import { Link } from 'react-router-dom';
import About from '../../pages/about/About'
export default function Header() {
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
  return (
    <>
        <header className='container'>
        <div className='logo'>
            <img src = {logo}  alt="asd" />
        </div>
        <div className="nav_and_flag">
            <nav ref = {navRef}>
                <Link to="/">ԳԼԽԱՎՈՐ</Link>
                <Link to="/about">ՄԵՐ ՄԱՍԻՆ</Link>
                <Link to="/products">ԱՐՏԱԴՐԱՆՔ</Link>
                <Link to="/servises">ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</Link>
                <Link to="/friends">ԳՈՐԾԸՆԿԵՐՆԵՐ</Link>
                <Link to="/contactUs">ՀԵՏԱԴԱՐՁ ԿԱՊ</Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <div className="flag">
                <img src={flag} alt="" />
            </div>
            <button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars />
            </button>
         </div>
        </header>
       
    </>
  )
}
