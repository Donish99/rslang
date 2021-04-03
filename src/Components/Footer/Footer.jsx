import FooterNavItem from './FooterNavItem';

import styles from './Footer.module.scss';
import { Container, Image, Nav } from 'react-bootstrap';
import logo_rsSchool from './../../assets/images/icons/rs_school_js.svg';

const Footer = () => (
    <Container>
        <div className={styles.wrapper}>
            <Nav className={styles.collaborators}>
                <FooterNavItem
                    gitHubLink="https://github.com/Donish99" fullName="Ахмадулло Нурмахаматов"
                />
                <FooterNavItem
                    gitHubLink="https://github.com/IrinaKorbut" fullName="Ирина Корбут"
                />
                <FooterNavItem
                    gitHubLink="https://github.com/IvanoPro"
                    fullName="Иван Казанов"
                />
            </Nav>
            <div className={styles.logoYearContainer}>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className={styles.nav} href="https://rs.school/">
                            <Image className={styles.logo} src={logo_rsSchool} fluid />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className={styles.year}>
                    2021
                </div>
            </div>        
        </div>
    </Container>
);

export default Footer;