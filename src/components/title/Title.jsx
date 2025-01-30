import Style from './Title.module.css'
const Title = ({ title, subtitle }) => {
    return (
        <div className={Style['title']}>
            <p>{subtitle}</p>
            <h2>{title}</h2>
        </div>
    )
}

export default Title
