
import styles from './Footer.module.scss'

import { Container, Image, Nav } from 'react-bootstrap';
import logo_rsSchool from './../../assets/images/icons/rs_school_js.svg'
import gitHubIcon from './../../assets/images/icons/github_icon.svg'

const Footer = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <Nav className={styles.collaborators}>
                    <Nav.Item className={styles.contactItem}>
                        <Nav.Link className={styles.link} href="https://github.com/Donish99">
                            <Image className={styles.icon} src={gitHubIcon} fluid />
                            <div className={styles.contactsTitle}>Ахмадулло Нурмахаматов</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.contactItem}>
                        <Nav.Link className={styles.link} href="https://github.com/IrinaKorbut">
                            <Image className={styles.icon} src={gitHubIcon} fluid />
                            <div className={styles.contactsTitle}>Ирина Корбут</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.contactItem}>
                        <Nav.Link className={styles.link} href="https://github.com/SergeyDanchenko">
                            <Image className={styles.icon} src={gitHubIcon} fluid />
                            <div className={styles.contactsTitle}>Сергей Данченко</div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={styles.contactItem}>
                        <Nav.Link className={styles.link} href="https://github.com/IvanoPro">
                            <Image className={styles.icon} src={gitHubIcon} fluid />
                            <div className={styles.contactsTitle}>Иван Казанов</div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link  href="https://rs.school/">
                                <Image className={styles.logo} src={logo_rsSchool} fluid />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                <div className={styles.year}>
                    2021
                </div>
            </div>
        </Container>
    )
}

export default Footer;