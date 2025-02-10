import Style from './Footer.module.css'
const Footer = () => {
    return (
        <div className={Style['footer']}>
            <p> ©️ 2025 Edusity. All rights reserved</p>
            <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    )
}

export default Footer
