import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="light" bg="light">
            <Container>
                <Navbar.Brand href="/">Rs-Lang</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Учебник" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#wordSection">Разделы</NavDropdown.Item>
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
                        <Button variant="light" className="mr-2 rounded-pill">Регистрация</Button>
                        <Button variant="dark" className="mr-2 rounded-pill">Войти</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header