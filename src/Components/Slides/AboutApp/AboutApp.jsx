import FeatureCard from '../../Cards/FeatureCard/FeatureCard'

import styles from './AboutApp.module.scss'
import girl from './../../../assets/images/main-page-girl.png'

const AboutAppSlide = () => {
    return (
        <div className={styles.wrapper}>
            <FeatureCard 
                imgSrc={ girl }
                title="Онлайн доступ"
                text="Вы можете использовать наше приложение когда и где вам удобно, глваное иметь доступ в интернет."

            />
            <FeatureCard 
                imgSrc={ girl }
                title="Игры"
                text="Изучении чего-либо во время игр становится более интересным. Веселое изучение английского языка поможет легче усвоить новый материал."

            />
            <FeatureCard 
                imgSrc={ girl }
                title="Электронный учебник"
                text="Тут вы можете узнать новые слова, их произношения, объяснение и посмотреть пример с данным словом."

            />
            <FeatureCard 
                imgSrc={ girl }
                title="Статистика"
                text="Здесь вы можете следить за прогрессом изучения слов в кратскосрочном и долгосрчоном периоде."

            />
        </div>
    )
}

export default AboutAppSlide;