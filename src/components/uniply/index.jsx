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

//Asset
import bgImg from '../../img/header/banner-uniply.png';
import logo  from '../../img/header/logoUniply.png';
import img1 from '../../img/uniply/benefícios-uniply-cintos-transportadores-tracbras.png';
import img2 from '../../img/uniply/folha-dados-uniply-correias-transportadoras-tracbras.png';
import img3 from '../../img/uniply/aplicações-uniply-cintos-transportadores-tracbras.png';
import img4 from '../../img/uniply/manual-instalação-uniply-cintos-transportador-tracbras.png';

function Uniply() {
    return(
        <>
            <Seo 
                title="Cintas transportadoras e elevatórias Alongamento mínimo"
                description="Levante e correias transportadoras de trecho mínimo com carcaça de tecido sólido.
                e alta resistência ao impacto."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Cintas transportadoras e elevatórias Alongamento mínimo</H1Title>
            <LeftRight src={img1} reverse alt={"benefícios-uniply-cintos-transportadores-tracbras"}>
                <IndexText color="#357C39">
                    <h2>VANTAGENS</h2>
                    <ul>
                        <Li>Alongamento mínimo.</Li>
                        <Li>Entrelaçamento único, 100% pliéster.</Li>
                        <Li>Alta resistencia a los impactos.</Li>
                        <Li>Alta resistencia a Rasgos e impactos.</Li>
                        <Li>Máxima resistencia a umidade, ácidos.</Li>
                        <Li>Alta resistencia nos desgastes laterais.</Li>
                        <Li>Anti chamas.</Li>
                        <Li>Anti estática.</Li>
                        <Li>Resistente óleos.</Li>
                        <Li>Excelentes encaixe com parafusos e unioes.</Li>
                        <Li>Máxima flexibilidade e estabilidade.</Li>
                        <Li>Baixo coeficiente de atrito.</Li>
                        <Li>Fácil de limpar.</Li>
                        <Li>Não há perda de tempo nas emendas.</Li>
                        <Li>Línha sanitária e fisiologicamente inócua.</Li>
                    </ul>
                </IndexText>
            </LeftRight>

            <LeftRight src={img2}  center alt={"folha-dados-uniply-correias-transportadoras-tracbras"}>
                <IndexText color="#357C39">
                    <h2>ESPECIFICAÇÕES TÉCNICAS</h2>
                    <p>Um resumo detalhado das características técnicas do produto e seus modelos.
                    Para obter mais informações, peça as Fichas Técnicas aos nossos Conselheiros.</p>
                </IndexText>
            </LeftRight>  
            <LeftRight src={img3} alt={"aplicações-uniply-cintos-transportadores-tracbras"}>
                <IndexText color="#357C39">
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

            <LeftRight src={img4} center alt={"manual-instalação-uniply-cintos-transportador-tracbras"}>
                <IndexText color="#357C39">
                    <h2>MANUAL DE INSTALAÇÃO</h2>
                    <p>Mostramos como instalar e manter UNIPLY adequadamente, para evitar problemas técnicos mais tarde.</p>
                </IndexText>
            </LeftRight>  
            <Footer />
        </>
    );
}

export default Uniply;