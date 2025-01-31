import Style from './Campus.module.css'
import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
import photo4 from '../../assets/photo4.png'
import { FaArrowRightLong } from 'react-icons/fa6'
const Campus = () => {
    return (
        <div className={Style['campus']}>
            <div className={Style['gallery']}>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
            </div>
            <button className="btn dark-btn">See more here <FaArrowRightLong /></button>
        </div>
    )
}

export default Campus
