import { Card } from 'react-bootstrap';
import styles from './AboutCommand.module.scss'
import girl from './../../../assets/images/main-page-girl.png'
import Akhmadullo from './../../../assets/images/Akhmadullo.jpg'
import Ivan from './../../../assets/images/Ivan.jpg'
import Irina from './../../../assets/images/Ira.jpg'
import Sergey from './../../../assets/images/Sergey.jpg'

const AboutCommand = () => {
    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <Card style={{ width: '14rem' }} className={`${styles.card} bg-light border-warning`}>
                <Card.Img variant="top" src={Akhmadullo} className={styles.img} />
                <Card.Body>
                    <Card.Title>Ахмадулло Нурмахаматов, разработчик</Card.Title>
                    <Card.Text>
                        Реализация Back-End, игры "....".
                    </Card.Text>
                    <Card.Link href="https://github.com/Donish99">Git Hub</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className={`${styles.card} bg-light border-warning`}>
                <Card.Img variant="top" src={Ivan} className={styles.img}/>
                <Card.Body>
                    <Card.Title>Иван Казанов, разработчик</Card.Title>
                    <Card.Text>
                        Реализация электронного учебника.
                    </Card.Text>
                    <Card.Link href="https://github.com/IvanoPro">Git Hub</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className={`${styles.card} bg-light border-warning`}>
                <Card.Img variant="top" src={Irina} className={styles.img}/>
                <Card.Body>
                    <Card.Title>Ирина Корбут, разработчик</Card.Title>
                    <Card.Text>
                        Реализаци главной страницы, модального окна входа/регистрации.
                    </Card.Text>
                    <Card.Link href="https://github.com/IrinaKorbut">Git Hub</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className={`${styles.card} bg-light border-warning`}>
                <Card.Img variant="top" src={Sergey} className={styles.img}/>
                <Card.Body>
                    <Card.Title>Сергей Данченко ???</Card.Title>
                    <Card.Text>                        
                    </Card.Text>
                    <Card.Link href="https://github.com/SergeyDanchenko">Git Hub</Card.Link>
                </Card.Body>
            </Card>
        </div>
        </div>
    )
}

export default AboutCommand;