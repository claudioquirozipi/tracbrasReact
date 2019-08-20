import React from 'react';
import {Link} from 'react-router-dom';


//Componenst
import Header from './components/header';
import Footer from './components/footer';
import LeftRight from './components/leftRight';
import IndexText from './components/leftRight/indexText';
import Li from './components/leftRight/li';
import Cards from './components/cards';
import Seo from './seo';
import Slyder from './blog/components/slyder';

//Styled-Components
import {H1Title} from './components/leftRight/styled';
import {
    IndexTextBlue,
    BgContainer
} from './styled.jsx';

//Assest
import IndexImg1 from '../img/index/ureply-tracbras-revestimiento-poliuretano.png';
import IndexImg2 from '../img/index/uniply-correias-transportadoras-tracbras.png';
import IndexImg4 from '../img/index/serply-serviço-técnico-conselho-tracbras.png';
import IndexImg5 from '../img/index/velta-cinto-borracha-transportador-tracbras.png';
import IndexImg6 from '../img/index/Dauer-correias-transportadoras-alta-performance-tracbras.png';
import IndexImg7 from '../img/index/tracbras-lider-mercado-agroindustrial-img1.png';
import logo1 from '../img/index/index__logo1.png';
import logo2 from '../img/index/index__logo2.png';
import logo4 from '../img/index/index__logo4.png';
import logo5 from '../img/index/index__logo5.png';
import logo6 from '../img/index/index__logo6.png';


function Index() {
    return(
        <>
            <Seo 
                title="Tracbras fabricação de revestimentos de poliuretano para cintas de içamento"
                description="Uma empresa líder no mercado do agronegócio desde 1989, a fabricação de correias transportadoras e elevadoras, Revestimentos de poliuretano e baldes de plástico."
                keywords={true}
            />
            
            <Header type="Index"/>
            <LeftRight src={IndexImg1} reverse alt={"ureply-tracbras-revestimiento-poliuretano"} >
                <IndexText color="#357C39" grey>
                    <img src={logo1} alt="ureply"/>
                    <h2>Revestimentos anti-abrasivos de poliuretano.</h2>
                    <ul>
                        <Li>Máxima resistência à abrasão e impacto.</Li>
                        <Li>Rápida e fácil Instalação.</Li>
                        <Li>Uma so peça sem fixações e uniones.</Li>
                        <Li>Top Fire linha anti-chamas.</Li>
                        <Li>Faixa vermelha indicativa de desgaste.</Li>
                    </ul>
                    <div>
                        <Link
                            to="./revestimento-poliuretano/ureply"
                        >Ampliar</Link>
                    </div>
                </IndexText>
            </LeftRight>



            <LeftRight src={IndexImg5} alt={"velta-cinto-borracha-transportador-tracbras"}>
                <IndexText color="#293141" grey>
                    <img src={logo5} alt="velta"/>
                    <h2>Correias transportadoras e elevadoras de borracha.</h2>
                    <ul>
                        <Li>Adesão entre ligações e lonas.</Li>
                        <Li>Baixo estiramento e alta estabilidade.</Li>
                        <Li>Excelente acamamento.</Li>
                        <Li>Alta resistência a tensões e flexões.</Li>
                        <Li>Baixo custo operacional.</Li>
                    </ul>
                    <div>
                        <Link
                            to="./correias-transportadoras/velta"
                        >Ampliar</Link>
                    </div>
                </IndexText>
            </LeftRight>

            <LeftRight src={IndexImg6} reverse alt={"Dauer-correias-transportadoras-alta-performance-tracbras"}>
                <IndexText color="#357C39" grey>
                    <img src={logo6} alt="dauer"/>
                    <h2>Correias em Poliuretano.</h2>
                    <ul>
                        <Li>Extrema resistência ao desgaste.</Li>
                        <Li>Resistente a gorduras e óleos.</Li>
                        <Li>Anti chamas e anti estática.</Li>
                        <Li>Baixo estiramento.</Li>
                        <Li>Durabilidade 3 vezes superior.</Li>
                    </ul>
                    <div>
                        <Link
                            to="./correias-transportadoras/dauer"
                        >Ampliar</Link>
                    </div>
                </IndexText>
            </LeftRight>
            <BgContainer>
                <LeftRight src={IndexImg7} reverse alt={"tracbras-lider-mercado-agroindustrial-img1"}>
                    <IndexTextBlue >
                        <h2>¿QUEM SOMOS?</h2>
                        <p>
                            Tracsa é uma empresa líder no mercado do agronegócio desde 1989, 
                            a fabricação de correias transportadoras e elevadoras, Revestimentos 
                            de poliuretano e baldes de plástico.<br/>
                            Com sua principal fábrica de 30.000 m2 localizado na Argentina e filial
                            no Brasil (TracBras) e Estados Unidos (TracUs) Tracsa exporta seus produtos
                            para os principais países do Mundo.    
                        </p>
                    </IndexTextBlue>
                </LeftRight>
            </BgContainer>
            <Slyder />
            <Cards/>
            <Footer />
        </>
    );
}

export default Index;