import PersonCard from '../../Cards/PersonCard/PersonCard';

import styles from './AboutCommand.module.scss'
import Akhmadullo from './../../../assets/images/Akhmadullo.jpg'
import Ivan from './../../../assets/images/Ivan.jpg'
import Irina from './../../../assets/images/Ira.jpg'

const AboutCommand = () => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <PersonCard
                imgSrc={Akhmadullo}
                title="Ахмадулло Нурмахаматов, разработчик"
                text="Реализация Back-End, игр."
                gitHubLink="https://github.com/Donish99"
            />
            <PersonCard
                imgSrc={Ivan}
                title="Иван Казанов, разработчик"
                text="Реализация электронного учебника."
                gitHubLink="https://github.com/IvanoPro"
            />
            <PersonCard
                imgSrc={Irina}
                title="Ирина Корбут, разработчик"
                text="Реализаци главной страницы, модального окна входа/регистрации."
                gitHubLink="https://github.com/IrinaKorbut"
            />
        </div>
    </div>
)

export default AboutCommand;