import Style from './Testimonials.module.css'
import next_button from '../../assets/next_button.png'
import back_button from '../../assets/back_button.png'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
import profile4 from '../../assets/profile4.png'
import { useRef } from 'react'
const Testimonials = () => {
    const slider = useRef()
    let translatesX = 0;

    const slideForward = () => {
        if (translatesX > -50) {
            translatesX -= 25
        }
        slider.current.style.transform = `translateX(${translatesX}%)`
    }
    const slideBackward = () => {
        if (translatesX < 0) {
            translatesX += 25
        }
        slider.current.style.transform = `translateX(${translatesX}%)`
    }
    return (
        <div className={Style['testimonials']}>
            <button onClick={slideForward} title='next'>
                <img src={next_button} alt="" className={Style['next-btn']} />
            </button>
            <button onClick={slideBackward} title='back'>
                <img src={back_button} alt="" className={Style['back-btn']} />
            </button>
            <div className={Style["slider"]}>
                <ul ref={slider}>
                    <li>
                        <div className={Style["slide"]}>
                            <div className={Style["user-info"]}>
                                <img src={profile1} alt="" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={Style["slide"]}>
                            <div className={Style["user-info"]}>
                                <img src={profile2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={Style["slide"]}>
                            <div className={Style["user-info"]}>
                                <img src={profile3} alt="" />
                                <div>
                                    <h3>William Jackson </h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={Style["slide"]}>
                            <div className={Style["user-info"]}>
                                <img src={profile4} alt="" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
