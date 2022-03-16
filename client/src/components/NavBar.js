import { useContext } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import {observer} from 'mobx-react-lite';

import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{'color': 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ? <Nav className="ml-auto" style={{'color': 'white'}}>
                    <Button variant={'outline-light'}>Админ панель</Button>
                    <Button variant={'outline-light'} className='ms-2'>Войти</Button>
                </Nav> : <Nav className="ml-auto" style={{'color': 'white'}}>
                    <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>}
            </Container>
        </Navbar>
    );
});

export default NavBar;