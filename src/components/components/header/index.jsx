import React from 'react';
import {Link} from 'react-router-dom';
//Styled-Components
import {
    HeaderSC,
    Nav,
    TitleIma,
    TitleHeader,
    Clientes
} from './styled';

//Assest
import bgCliente from '../../../img/header/header__clientes.png';
import logo from '../../../img/header/header__logo.png';

function Header() {
    return(
        <HeaderSC>
            <Nav>
                <img src={logo} alt=""/>
                <ul>
                    <li><Link to="/"></Link></li>
                    <li><a href="https://tracsa.com.ar/"><span></span></a></li>
                </ul>
            </Nav>
            <TitleIma><img src={logo} alt=""/></TitleIma>
            <TitleHeader><span>MAIS DE 4.000</span><br/>CLIENTES NOS ESCOLHEM</TitleHeader>
            <Clientes src={bgCliente}/>
        </HeaderSC>
    );
}

export default Header;