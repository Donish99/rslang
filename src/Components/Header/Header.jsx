import { Navbar, Nav, NavDropdown, Button, Container, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { login } from "../../services/authService"

const Header = () => {

    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);    

    const [showSignIn, setShowSignIn] = useState(false);
    const handleCloseSignIn = () => setShowSignIn(false);
    const handleShowSignIn = () => setShowSignIn(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmailSignIn = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePasswordSignIn = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmitSignIn = (e) => {
        login(email, password)
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
                            <NavDropdown title="Игры" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#Savanna">Саванна</NavDropdown.Item>
                                <NavDropdown.Item href="#Call">Аудиовызов</NavDropdown.Item>
                                <NavDropdown.Item href="#Sprint">Спринт</NavDropdown.Item>
                                <NavDropdown.Item href="#MyGame">Своя игра</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#Statistic">Статистика</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="light" className="mr-2 rounded-pill" onClick={handleShowRegister}>
                                Регистрация
                            </Button>
                            <Button variant="dark" className="mr-2 rounded-pill" onClick={handleShowSignIn}>
                                Войти
                            </Button>
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
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Запомнить меня" />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Зарегистрироваться
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showSignIn} onHide={handleCloseSignIn}>
                <Modal.Header closeButton>
                    <Modal.Title>Вход</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitSignIn}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Email" 
                                value={email} 
                                onChange={handleChangeEmailSignIn}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="Пароль" 
                                value={password} 
                                onChange={handleChangePasswordSignIn}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Запомнить меня" />
                        </Form.Group>
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