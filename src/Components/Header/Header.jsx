import { Navbar, Nav, NavDropdown, Button, Container, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import authService from "../../services/authService"
import styles from './Header.module.scss'

const Header = () => {

    //Register
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    //Log
    const [showLogIn, setShowLogIn] = useState(false);
    const handleCloseLogIn = () => setShowLogIn(false);
    const handleShowLogIn = () => setShowLogIn(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLogged, setLogged] = useState(null)

    const handleChangeEmailLogIn = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePasswordLogIn = (event) => {
        setPassword(event.target.value);
    }

    async function handleSubmitLogIn() {
        await authService.login(email, password);
        handleCloseLogIn();
        setLogged(authService.getJwt())
    }

    function handleLogOut(e) {
        authService.logout();
        setLogged(null)
    }

    let buttonRegister;
    if (!isLogged) {
        buttonRegister = <Button variant="light" className="mr-2 rounded-pill" onClick={handleShowRegister}>
        Регистрация
    </Button>
    } else {
        buttonRegister = <></>;
    }

    let buttonLog;
    if (!isLogged) {
        buttonLog = <Button variant="dark" className="mr-2 rounded-pill" onClick={handleShowLogIn}>
                        Войти
                    </Button>;
    } else {
        buttonLog = <Button variant="dark" className="mr-2 rounded-pill" onClick={handleLogOut}>
                        Выйти
                    </Button>;
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Rs-Lang</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Учебник" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#wordList">Список слов</NavDropdown.Item>
                                <NavDropdown.Item href="#dictionary">Словарь</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#bookSettings">Настройки учебника</NavDropdown.Item>
                            </NavDropdown>
                            {/* <NavDropdown title="Игры" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Savanna">Саванна</NavDropdown.Item>
                            <NavDropdown.Item href="#Call">Аудиовызов</NavDropdown.Item>
                            <NavDropdown.Item href="#Sprint">Спринт</NavDropdown.Item>
                            <NavDropdown.Item href="#MyGame">Своя игра</NavDropdown.Item>
                        </NavDropdown> */}
                            <Nav.Link href="#Games">Игры</Nav.Link>
                            <Nav.Link href="#Statistic">Статистика</Nav.Link>
                        </Nav>
                        <Nav>
                            {buttonRegister}
                            {buttonLog}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showRegister} onHide={handleCloseRegister}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Имя пользователя</Form.Label>
                            <Form.Control type="text" placeholder="Имя пользователя" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type="password" placeholder="Пароль" />
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Запомнить меня" />
                    </Form.Group> */}
                        <Button variant="dark" type="submit">
                            Зарегистрироваться
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showLogIn} onHide={handleCloseLogIn} className={styles.modal}>
                <Modal.Header closeButton>
                    <Modal.Title>Вход</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitLogIn}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={handleChangeEmailLogIn}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={handleChangePasswordLogIn}
                            />
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Запомнить меня" />
                    </Form.Group> */}
                        <Button variant="dark" type="submit">
                            Войти
                    </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Header