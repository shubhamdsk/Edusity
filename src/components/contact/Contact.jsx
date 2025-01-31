import Style from './Contact.module.css'

const Contact = () => {
    return (
        <div className={Style['contact']}>
            <div className={Style['contact-col']}>
                <h3>Send us a message</h3>
                <p>
                    Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li>shubhamdeshm37@gmail.com</li>
                    <li>7218438401</li>
                    <li></li>
                </ul>
            </div>
            <div className={Style['contact-col']}>

            </div>
        </div>
    )
}

export default Contact
