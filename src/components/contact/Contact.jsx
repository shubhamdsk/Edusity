import Style from './Contact.module.css'
import msg_icon from '../../assets/msg_icon.png'
import email_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import address_icon from '../../assets/address_icon.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useState } from 'react'
const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "359ff8de-0852-4fec-823c-e1e4f8e0be49");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className={Style['contact']} id='contact'>
            <div className={Style['contact-col']}>
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>
                    Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={email_icon} alt="" /> shubhamdeshm37@gmail.com </li>
                    <li><img src={phone_icon} alt="" /> 7218438401</li>
                    <li><img src={address_icon} alt="" />Texas Tower Kharadi <br />Pune 411014, India</li>
                </ul>
            </div>
            <div className={Style['contact-col']}>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name='name' id='name' placeholder='Enter your name' required />

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id="phone" placeholder='Enter your mobile number' required />

                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" id="message" rows={6} placeholder='Enter your message' required></textarea>

                    <button type='submit' className="btn dark-btn">Submit Now <FaArrowRightLong /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
