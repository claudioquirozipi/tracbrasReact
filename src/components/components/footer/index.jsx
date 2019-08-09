import React from 'react';
import {Link} from 'react-router-dom';
 
//Components
import Form from './form';

//Styled-Components
import {
    FooterContainer,
    ContainerFormText,
    Information,
    ContainerButton
} from './styled';

//Assest
import IconGroup from '../../../img/footer/group.svg';

function Footer() {
    return(
        <FooterContainer>
            <ContainerFormText>
                <Information>
                    <ContainerButton>
                        <img src={IconGroup} alt="icon"/>
                    </ContainerButton>
                    <ul>
                        <li>Tel. +55 11 29857935 / +55 11 23050925</li>
                        <li>Whatsapp: (+55) 11 9 8153 0003</li>
                        <li>Suporte: info@tracbras.com.br</li>
                        <li>Vendas: vendas_sp@tracbras.com.br</li>
                        <li>Rua Bentópolis. 146. Parque novo mundo<br/>São Paolo/SP 02181-080</li>
                    </ul>
                    <ContainerButton>
                        <Link to="/blog">blog</Link>
                    </ContainerButton>
                    <ContainerButton simple>
                        <Link to="/form" >Ver evento</Link>
                    </ContainerButton>
                </Information>
                <Form />
            </ContainerFormText>
        </FooterContainer>
    );
}

export default Footer;