import styles from './Welcome.module.scss'

import girl from './../../../assets/images/main-page-girl.png'
import backgroundBlackShapes from './../../../assets/images/main-page-black-shapes.png'

const WelcomeSlide = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.description}>
                <div className={styles.title}>
                    Начните изучать английский вместе с нами
                </div>
                <div className={styles.subtitle}>
                    По статистике, люди, знающие английский язык, имеют больше возможностей
                </div>
            </div>
            <img src={backgroundBlackShapes} className={styles.imgBg} alt="Background">
            </img>
            <img src={girl} className={styles.img} alt="Girl">
            </img>
        </div>
    )
}

export default WelcomeSlide;