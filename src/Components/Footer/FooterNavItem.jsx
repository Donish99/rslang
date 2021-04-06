import { Image, Nav } from 'react-bootstrap';
import styles from './Footer.module.scss';
import gitHubIcon from './../../assets/images/icons/github_icon.svg';

const FooterNavItem = ({ gitHubLink, fullName }) => (
    <Nav.Item className={styles.contactItem}>
        <Nav.Link className={styles.link} href={gitHubLink} >
            <Image className={styles.icon} src={gitHubIcon} fluid />
            <div className={styles.contactsTitle}>{fullName} </div>
        </Nav.Link>
    </Nav.Item>
);

export default FooterNavItem;