
import Style from './Navbar.module.css';
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setSticky(true) : setSticky(false)
        })
    }, [])

    return (
        <div className={`${Style["nav"]} container ${sticky ? Style['dark-nav'] : ""}`}>
            <img src={logo} alt="" className={Style['logo']} />
            <ul>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-240} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-230} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-200} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' className="btn" smooth={true} duration={500} offset={-180}>Contact</Link> </li>
            </ul>
        </div>
    )
}

export default Navbar
