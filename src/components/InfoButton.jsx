import style from './InfoButton.module.css'

const InfoButton = () => {
    const textButton = "LEGGi DI PIU'"

    return(
        <button className={style.button}>
            {textButton}
        </button>
    )
}

export default InfoButton