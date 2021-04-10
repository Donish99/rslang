import { Card } from "react-bootstrap";
import styles from './ShortTermStatisticsCard.module.scss';
import { Progress } from 'antd';


const ShortTermStatisticsCard = ({ title, longestRightAnswer, learntWords, percentRightAnswers }) => {

    return (
        <Card
            key={title}
            style={{ maxWidth: "30em" }}
            className={`${styles.card} bg-light border-warning`}
        >
            <Card.Body className={`${styles.cardBody}`}>
                <Card.Title><h4> {title} </h4></Card.Title>
                <div className={styles.subtitle}>
                    <span className={styles.name}>
                        Самая длинная серия правильных ответов:
                    </span>  
                    {longestRightAnswer}
                </div>
                <div className={styles.subtitle}>
                    <span className={styles.name}>
                        Количесво изученных слов:
                    </span> 
                    {learntWords}
                </div>
                <div className={styles.subtitle}>
                    <span className={styles.name}>
                        Процент правильных ответов:
                    </span> 
                    <Progress type="circle" percent={percentRightAnswers} width={50} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default ShortTermStatisticsCard;