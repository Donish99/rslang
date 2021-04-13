import { Navbar, Nav, NavDropdown, Container, Modal } from 'react-bootstrap';
import { useState } from 'react';
import authService from "../../services/authService"
import usersService from "../../services/usersService"
import styles from './Header.module.scss'
import { withRouter } from 'react-router-dom'

import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#ffa51e',
      },
  },
});


const validationSchemaRegister = yup.object().shape({
    name: yup
        .string('Введите имя')
        .required('Необходимо ввести имя'),
    email: yup
        .string('Введите e-mail')
        .email('E-mail должен быть вида: email@mark.com')
        .required('Необходимо ввести e-mail'),
    password: yup
        .string('Введите пароль')
        .min(8, 'Пароль должен быть не короче 8 символов и содержать хотябы одну заглавную букву')
        .required('Необходимо ввести пароль'),
});

const validationSchemaLogIn = yup.object().shape({
    email: yup
        .string('Введите e-mail')
        .email('E-mail должен быть вида: email@mark.com')
        .required('Необходимо ввести e-mail'),
    password: yup
        .string('Введите пароль')
        .min(8, 'Пароль должен быть не короче 8 символов и содержать хотябы одну заглавную букву')
        .required('Необходимо ввести пароль'),
});


const Header = ({ history }) => {

    const formikRegistr = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchemaRegister,
        onSubmit: async (values) => {
            const user = {
                name: values.name,
                email: values.email,
                password: values.password,
            }

            const data = await usersService.register(user)
            if (data.data) {
                await authService.login(user.email, user.password);
                handleCloseRegister();
                setLogged(authService.getJwt());
            } else {
                handleAddRegisterError()
            }
        }
    });

    const formikLogIn = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchemaLogIn,
        onSubmit: async (values) => {
            const data = await authService.login(values.email, values.password) || {};
            if (data.message) {
                handleCloseLogIn();
                setLogged(authService.getJwt())
            } else {
                handleAddLogInError()
            }
        }
    });

    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const [showLogIn, setShowLogIn] = useState(false);
    const handleCloseLogIn = () => setShowLogIn(false);
    const handleShowLogIn = () => setShowLogIn(true);

    const [showRegisterError, setShowRegisterError] = useState(false);
    const handleDeleteRegisterError = () => setShowRegisterError(false);
    const handleAddRegisterError = () => setShowRegisterError(true);

    const [showLogInError, setShowLogInError] = useState(false);
    const handleDeleteLogInError = () => setShowLogInError(false);
    const handleAddLogInError = () => setShowLogInError(true);

    const [isLogged, setLogged] = useState(authService.getJwt())

    function handleLogOut() {
        authService.logout();
        setLogged(null);
        history.push('/');
    }

    let registerErrorMessage;
    if (showRegisterError) {
        registerErrorMessage = <div className={styles.errorMessage}>Пользователь с таким e-mail уже существует</div>
    } else {
        registerErrorMessage = <div className={styles.errorMessageHidden}>Пользователь с таким e-mail уже существует</div>
    }

    let logInErrorMessage;
    if (showLogInError) {
        logInErrorMessage = <div className={styles.errorMessage}>Пользователя с таким e-mail не существует</div>
    } else {
        logInErrorMessage = <div className={styles.errorMessageHidden}>Пользователя с таким e-mail не существует</div>
    }

    let buttonRegister;
    if (!isLogged) {
        buttonRegister = <Button color="primary" variant="contained" className="mr-2 rounded-pill"  onClick={handleShowRegister}>
            Регистрация
                        </Button>
    } else {
        buttonRegister = <></>;
    }

    let buttonLog;
    if (!isLogged) { 
        buttonLog = <Button color="primary" variant="contained" className="mr-2 rounded-pill"  onClick={handleShowLogIn}>
            Войти
                    </Button>;
    } else {
        buttonLog = <Button color="primary" variant="contained" className="mr-2 rounded-pill" onClick={handleLogOut}>
            Выйти
                    </Button>;
    }

    return (
        <>
        <ThemeProvider theme={theme}>
            <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
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
                            <Nav.Link href="#games">Игры</Nav.Link>
                            <Nav.Link href="#statistic">Статистика</Nav.Link>
                        </Nav>
                        <Nav>
                            {buttonRegister}
                            {buttonLog}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showRegister} onHide={handleCloseRegister} onClick={() => handleDeleteRegisterError()}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация
                        {registerErrorMessage}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formikRegistr.handleSubmit}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Введите имя"
                            value={formikRegistr.values.name}
                            onChange={formikRegistr.handleChange}
                            error={formikRegistr.touched.name && Boolean(formikRegistr.errors.name)}
                            helperText={formikRegistr.touched.name && formikRegistr.errors.name}
                        />
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Введите Email"
                            value={formikRegistr.values.email}
                            onChange={formikRegistr.handleChange}
                            error={formikRegistr.touched.email && Boolean(formikRegistr.errors.email)}
                            helperText={formikRegistr.touched.email && formikRegistr.errors.email}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Введите пароль"
                            type="password"
                            value={formikRegistr.values.password}
                            onChange={formikRegistr.handleChange}
                            error={formikRegistr.touched.password && Boolean(formikRegistr.errors.password)}
                            helperText={formikRegistr.touched.password && formikRegistr.errors.password}
                        />
                        <Button color="primary" variant="contained" className="mt-3 rounded-pill" fullWidth type="submit">
                            Зарегистрироваться
                    </Button>
                    </form>
                </Modal.Body>
            </Modal>
            <Modal show={showLogIn} onHide={handleCloseLogIn} className={styles.modal} onClick={() => handleDeleteLogInError() }>
                <Modal.Header closeButton>
                    <Modal.Title>Вход
                        {logInErrorMessage}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formikLogIn.handleSubmit}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formikLogIn.values.email}
                            onChange={formikLogIn.handleChange}
                            error={formikLogIn.touched.email && Boolean(formikLogIn.errors.email)}
                            helperText={formikLogIn.touched.email && formikLogIn.errors.email}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Пароль"
                            type="password"
                            value={formikLogIn.values.password}
                            onChange={formikLogIn.handleChange}
                            error={formikLogIn.touched.password && Boolean(formikLogIn.errors.password)}
                            helperText={formikLogIn.touched.password && formikLogIn.errors.password}
                        />
                        <Button color="primary" variant="contained" className="mt-3 rounded-pill" fullWidth type="submit">
                            Войти
                    </Button>
                    </form>
                </Modal.Body>
            </Modal>
            </ThemeProvider>
        </>
    )
}

export default withRouter(Header)