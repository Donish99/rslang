import FeatureCard from '../../Cards/FeatureCard/FeatureCard'

import styles from './AboutApp.module.scss'
import online from './../../../assets/images/online.png'
import game from './../../../assets/images/game.png'
import ebook from './../../../assets/images/ebook.png'
import statistic from './../../../assets/images/statistic.png'

const AboutAppSlide = () => {
    return (
        <div className={styles.wrapper}>
            <FeatureCard 
                imgSrc={ online }
                title="Онлайн доступ"
                text="Вы можете использовать наше приложение когда и где вам удобно, главное иметь доступ в интернет."

            />
            <FeatureCard 
                imgSrc={ game }
                title="Игры"
                text="Изучении чего-либо во время игр становится более интересным. Веселое изучение английского языка поможет легче усвоить новый материал."

            />
            <FeatureCard 
                imgSrc={ ebook }
                title="Электронный учебник"
                text="Тут вы можете узнать новые слова, их произношения, объяснение и посмотреть пример с данным словом."

            />
            <FeatureCard 
                imgSrc={ statistic }
                title="Статистика"
                text="Здесь вы можете следить за прогрессом изучения слов в кратскосрочном и долгосрчоном периоде."

            />
        </div>
    )
}

export default AboutAppSlide;