
import Style from './Navbar.module.css';
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react';
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
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li> <button className="btn">Contact</button> </li>
            </ul>
        </div>
    )
}

export default Navbar
