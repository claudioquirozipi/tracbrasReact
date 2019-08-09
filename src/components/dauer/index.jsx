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
import bgImg from '../../img/header/banner-dauer.png';
import logo from '../../img/header/logoDauer.png';
import img1 from '../../img/dauer/benefícios-Dauer-cintos-transportadores-alta performance-tracbras.png';
import img2 from '../../img/dauer/Dauer-transportadora de folhas-correias-alto-desempenho-tracbras.png';
import img3 from '../../img/dauer/aplicações-Dauer-cintos-transportadores-alta performance-tracbras.png';

function Daver() {
    return(
        <>
            <Seo 
                title="Correias transportadoras Dauer."
                description="Correias de alto desempenho com extrema resistência ao desgaste.
                Resistente a gorduras e óleos.
                Retardador de chama e antiestático."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Correias transportadoras Dauer</H1Title>
            <LeftRight src={img1} reverse alt={"benefícios-Dauer-cintos-transportadores-alta performance-tracbras"} >
                <IndexText color="#357C39">
                    <h2>BENEFICIOS</h2>
                    <ul>
                        <Li>Correias em Poliuretano.</Li>
                        <Li>Extrema resistência ao desgaste.</Li>
                        <Li>Resistente a gorduras e óleos.</Li>
                        <Li>Anti chamas e anti estática.</Li>
                        <Li>Baixo estiramento.</Li>
                        <Li>Redução no tempo de emendas.</Li>
                        <Li>Dura 3 vezes mais que á borracha.</Li>
                    </ul>
                </IndexText>
            </LeftRight>  
            <LeftRight src={img2} center alt={"Dauer-transportadora de folhas-correias-alto-desempenho-tracbras"}>
                <IndexText color="#357C39">
                    <h2>FICHA TÉCNICA</h2>
                    <p>Um resumo das características técnicas do produto e seus modelos. Para mais informaçõe, consulte as Folhas Técnicas aos nossos consultores tecnicos.</p>
                </IndexText>
            </LeftRight>  
            <LeftRight src={img3} alt={"aplicações-Dauer-cintos-transportadores-alta performance-tracbras"}>
                <IndexText color="#357C39">
                    <h2>APLICAÇÕES</h2>
                    <ul>
                        <Li>Portos.</Li>
                        <Li>Mineração.</Li>
                        <Li>Construção.</Li>
                        <Li>Agroindústria.</Li>
                        <Li>Indústria de oleos.</Li>
                        <Li>Indústria da madeira.</Li>
                        <Li>Indústria alimentícia.</Li>
                        <Li>Indústria de frutas.</Li>
                        <Li>Moinhos de açucar.</Li>
                        <Li>Outro.</Li>
                    </ul>
                </IndexText>
            </LeftRight>  
            <Footer />
        </>
    );
}

export default Daver;