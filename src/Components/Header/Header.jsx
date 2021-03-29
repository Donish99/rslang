import { Navbar, Nav, NavDropdown, Button, Container, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';

const Header = () => {

    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleshowRegister = () => setShowRegister(true);

    const [showEnter, setShowEnter] = useState(false);
    const handleCloseEnter = () => setShowEnter(false);
    const handleshowEnter = () => setShowEnter(true);

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
                            <Button variant="light" className="mr-2 rounded-pill" onClick={handleshowRegister}>
                                Регистрация
                            </Button>
                            <Button variant="dark" className="mr-2 rounded-pill" onClick={handleshowEnter}>
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
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Имя пользователя</Form.Label>
                            <Form.Control type="name" placeholder="Имя пользователя" />
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
                            Отпарвить
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showEnter} onHide={handleCloseEnter}>
                <Modal.Header closeButton>
                    <Modal.Title>Вход</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                            Отпарвить
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Header