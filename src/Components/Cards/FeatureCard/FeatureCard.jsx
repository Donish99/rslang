import styles from './FeatureCard.module.scss';
import { Card } from 'react-bootstrap';

const FeatureCard = ({ imgSrc, title, text }) => (
    <Card 
        style={ { width: '14rem' } } 
        className={`${styles.card} bg-light border-warning` }>
        <Card.Img 
            variant="top" 
            src={ imgSrc }
        />
        <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>{ text }</Card.Text>
        </Card.Body>
    </Card>
)

export default FeatureCard;