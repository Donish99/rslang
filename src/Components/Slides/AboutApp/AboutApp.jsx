import { Card } from 'react-bootstrap';

import styles from './AboutApp.module.scss'
import girl from './../../../assets/images/main-page-girl.png'

const AboutAppSlide = () => {
    return (
        <div className={styles.wrapper}>
            <Card style={{ width: '14rem' }} className={`${styles.card} bg-light border-warning`}>
                <Card.Img variant="top" src={girl} />
                <Card.Body>
                    <Card.Title>Онлайн доступ</Card.Title>
                    <Card.Text>
                        Вы можете использовать наше приложение когда и где вам удобно, глваное иметь доступ в интернет.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className={`${styles.card} bg-light border-warning`}>
                <Card.Img variant="top" src={girl} />
                <Card.Body>
                    <Card.Title>Игры</Card.Title>
                    <Card.Text>
                    Изучении чего-либо во время игр становится более интересным. Веселое изучение английского языка поможет легче усвоить новый материал.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className={`${styles.card} bg-light border-warning`}>
                <Card.Img variant="top" src={girl} />
                <Card.Body>
                    <Card.Title>Электронный учебник</Card.Title>
                    <Card.Text>
                        Тут вы можете узнать новые слова, их произношения, объяснение и посмотреть пример с данным словом.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className={`${styles.card} bg-light border-warning`}>
                <Card.Img variant="top" src={girl} />
                <Card.Body>
                    <Card.Title>Статистика</Card.Title>
                    <Card.Text>
                        Здесь вы можете следить за прогрессом изучения слов в кратскосрочном и долгосрчоном периоде.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AboutAppSlide;