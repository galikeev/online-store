import {Container, Form, Card, Button} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{'height': window.innerHeight - 54}}
        >
            <Card style={{'width': '600px'}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        placeholder='Введите ваш email...'
                        className='mt-3'
                    />
                    <Form.Control
                        placeholder='Введите ваш пароль'
                        className='mt-3'
                    />
                    <div style={{'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '1.5rem'}}>
                        {
                            isLogin ? 
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div> 
                            : 
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button variant="outline-success" style={{'width': 'inherit'}}>
                            {
                                isLogin ? 'Войти' : 'Регистрация'
                            }
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;