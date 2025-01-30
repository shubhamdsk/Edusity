import Style from './Hero.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
    return (
        <div className={`${Style['hero']} container`}>
            <div className={Style['hero-text']}>
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experience needed to excel in the dynamic filed of education</p>
                <button className="btn">Explore more <FaArrowRightLong /></button>
            </div>
        </div >
    )
}

export default Hero
