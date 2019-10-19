import React from 'react';

//Components
import Header2 from '../components/header/header2';
import LeftRight from '../components/leftRight';
import IndexText from '../components/leftRight/indexText';
import Li from '../components/leftRight/li';
import Footer from '../components/footer';
import Seo from '../seo';

//Styled-Components
import {H1Title} from '../components/leftRight/styled';

//Assets
import bgImg from '../../img/header/banner-velta.png';
import logo from '../../img/header/logoVelta.png';
import img1 from '../../img/velta/benefícios-velta-cinta-borracha-transportadora-tracbras.png';
import img2 from '../../img/velta/folha-dados-técnico-velto-cinto-borracha-transportador-tracbras.png';
import img3 from '../../img/velta/aplicações-velta-cinta-borracha-transportadora-tracbras.png';
import img4 from '../../img/velta/velta01.svg';
import img5 from '../../img/velta/velta02.svg';
function Velta() {
    return(
        <>
            <Seo 
                title="Correia transportadora Velta."
                description="Correia de borracha, transportadores e elevadores de baixa elasticidade e alta estabilidade
                Com excelente ancoragem e alta resistência."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Correia transportadora Velta</H1Title>
            <LeftRight src={img1} reverse alt="benefícios-velta-cinta-borracha-transportadora-tracbras">
                <IndexText color="#293141">
                    <h2>VANTAGENS</h2>
                    <ul>
                        <Li>Adesão total entre camada de ligação e lonas.</Li>
                        <Li>Baixo estiramento e alta estabilidade.</Li>
                        <Li>Excelente acamamento.</Li>
                        <Li>Alta resistência à tensões e flexões.</Li>
                        <Li>Excelente capacidade de absorção de impactos.</Li>
                        <Li>Alta resistência à amendao mecânica.</Li>
                        <Li>Baixo custo operacional.</Li>
                        <Li>Excelente adesão em amendas a quente ou a frio.</Li>
                    </ul>
                </IndexText>
            </LeftRight>  
            <LeftRight src={img4} center alt="folha-dados-técnico-velto-cinto-borracha-transportador-tracbras">
                <IndexText color="#293141">
                    <h2>ESPECIFICAÇÕES TÉCNICAS</h2>
                    <p>
                        Um resumo detalhado das características técnicas do produto e seus modelos.
                        Para obter mais informações, peça as Fichas Técnicas aos nossos Consultores.
                    </p>
                </IndexText>
            </LeftRight>  
            <LeftRight src={img5} center alt="folha-dados-técnico-velto-cinto-borracha-transportador-tracbras">
                <IndexText color="#293141">
                </IndexText>
            </LeftRight>  
            <LeftRight src={img3} alt="aplicações-velta-cinta-borracha-transportadora-tracbras">
                <IndexText color="#293141">
                    <h2>APLICATIVOS</h2>
                    <ul>
                        <Li>Agroindustrial.</Li>
                        <Li>Indústria da madeira.</Li>
                        <Li>Indústria alimentícia.</Li>
                        <Li>Indústria de frutas.</Li>
                        <Li>Fábricas de açúcar.</Li>
                        <Li>Portos.</Li>
                        <Li>Mineração.</Li>
                        <Li>Construção.</Li>
                        <Li>Outro.</Li>
                    </ul>
                </IndexText>
            </LeftRight>  
            <Footer />
        </>
    );
}

export default Velta;