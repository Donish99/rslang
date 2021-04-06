import styles from './PersonCard.module.scss';
import { Card } from 'react-bootstrap';

const PersonCard = ({ imgSrc, title, text, gitHubLink }) => (
    <Card 
        style={ { width: '14rem' } } 
        className={`${styles.card} bg-light border-warning` }>
        <Card.Img 
            variant="top" 
            src={ imgSrc } 
            className={ styles.img } />
        <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Text>{ text }</Card.Text>
            <Card.Link href={ gitHubLink }>Git Hub</Card.Link>
        </Card.Body>
    </Card>
)

export default PersonCard;