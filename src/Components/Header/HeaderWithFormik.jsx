import { Navbar, Nav, NavDropdown, Container, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import authService from "../../services/authService"
import usersService from "../../services/usersService"
import styles from './Header.module.scss'

import { useFormik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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


const Header = () => {

    const formikRegistr = useFormik({
        initialValues: {
            name: 'Foobar',
            email: '1foobar@example.com',
            password: '1234567T',
        },
        validationSchema: validationSchemaRegister,

        onSubmit: async (values) => {
        }
    });

    async function submitFormRegister(values) {
        // console.log(values)
        const user = {
            name: values.name,
            email: values.email,
            password: values.password,
        }
        // console.log(user)
        await usersService.register(user)
            .catch(err => {
                console.log('user');
                console.log('status', err.response.status);
                console.log('message', err.response.message);
                if (err.response.status === 417) {
                    alert('Пользователь с таким e-mail уже существует');
                }
                if (err.response.status === 422) {
                    alert('Вы не заполнити все поля, либо ввели некоректные данные');
                }
            })
        await authService.login(user.email, user.password);
        handleCloseRegister();
        setLogged(authService.getJwt())
    }

    const formikLogIn = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: '1234567T',
        },
        validationSchema: validationSchemaLogIn,
        onSubmit: async (values) => {
        }
    });

    async function submitFormLogIn(values) {
        await authService.login(values.email, values.password)
            .catch(err => {
                if (values.email === "" || err.response.status === 403) {
                    alert('Вы не заполнити все поля, либо ввели некоректные данные')
                } else if (err.response.status === 404) {
                    alert('Пользователя с таким e-mail не существует')
                }
                console.log('auth')
                console.log('status', err.response.status)
                console.log('message', err.response.message)
            });
        handleCloseLogIn();
        setLogged(authService.getJwt())
    }

    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const [showLogIn, setShowLogIn] = useState(false);
    const handleCloseLogIn = () => setShowLogIn(false);
    const handleShowLogIn = () => setShowLogIn(true);

    const [isLogged, setLogged] = useState(authService.getJwt())

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
                    {/* <form onSubmit={formikRegistr.handleSubmit}> */}
                    <form onSubmit={e => {
                        e.preventDefault();
                        submitFormRegister(formikRegistr.values)
                    }}>
                        {/* }}> */}
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Имя"
                            value={formikRegistr.values.name}
                            onChange={formikRegistr.handleChange}
                            error={formikRegistr.touched.name && Boolean(formikRegistr.errors.name)}
                            helperText={formikRegistr.touched.name && formikRegistr.errors.name}
                        />
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formikRegistr.values.email}
                            onChange={formikRegistr.handleChange}
                            error={formikRegistr.touched.email && Boolean(formikRegistr.errors.email)}
                            helperText={formikRegistr.touched.email && formikRegistr.errors.email}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Пароль"
                            type="password"
                            value={formikRegistr.values.password}
                            onChange={formikRegistr.handleChange}
                            error={formikRegistr.touched.password && Boolean(formikRegistr.errors.password)}
                            helperText={formikRegistr.touched.password && formikRegistr.errors.password}
                        />
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Зарегестрироваться
                    </Button>
                    </form>
                </Modal.Body>
            </Modal>
            <Modal show={showLogIn} onHide={handleCloseLogIn} className={styles.modal}>
                <Modal.Header closeButton>
                    <Modal.Title>Вход</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            submitFormLogIn(formikLogIn.values)
                        }}>
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
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Войти
                    </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Header