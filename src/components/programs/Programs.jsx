import Style from './Programs.module.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import program_icon1 from "../../assets/program_icon1.png"
import program_icon2 from "../../assets/program_icon2.png"
import program_icon3 from "../../assets/program_icon3.png"
const Programs = () => {
    return (
        <div className={Style['programs']} id='program'>
            <div className={Style['program']}>
                <img src={image1} alt="" />
                <div className={Style["caption"]}>
                    <img src={program_icon1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className={Style['program']}>
                <img src={image2} alt="" />
                <div className={Style["caption"]}>
                    <img src={program_icon2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className={Style['program']}>
                <img src={image3} alt="" />
                <div className={Style["caption"]}>
                    <img src={program_icon3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    )
}

export default Programs
