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
import bgImg from '../../img/header/banner-ureply.png';
import logo from '../../img/header/logoUreply.png';
import img1 from '../../img/ureply/ureply-tracbras-revestimiento-poliuretano-img1.png';
import img2 from '../../img/ureply/ureply-tracbras-revestimiento-poliuretano-img2.png';
import img3 from '../../img/ureply/ureply-tracbras-revestimiento-poliuretano-img3.png';
import img4 from '../../img/ureply/ficha-tecnica-ureply-tracbras-revestimiento-poliuretano-img.png';
import img5 from '../../img/ureply/instalação-ureply-tracbras-revestimiento-poliuretano-img.png';


function Ureply() {
    return(
        <>
            < Seo 
                title="Revestimentos anti-abrasivos de poliuretano"
                description="Revestimentos de poliuretano antiabrasivos com resistência à abrasão e ao impacto.
                Em uma peça sem fixações ou articulações."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Revestimentos anti-abrasivos de poliuretano</H1Title>
            <LeftRight src={img1} alt="ureply-tracbras-revestimiento-poliuretano-img1">
                <IndexText color="#357C39">
                    <h2>VANTAGENS</h2>
                    <ul>
                        <Li>Máxima resistencia a abrasão e impacto.</Li>
                        <Li>Uma peca única sem faxicoes ou unioes.</Li>
                        <Li>Rapida e simple instalação.</Li>
                        <Li>Baixo peso.</Li>
                        <Li>Alta durabilidade.</Li>
                        <Li>Atóxico.</Li>
                        <Li>Redução no custo em manutenções.</Li>
                        <Li>Diminuicão de riscos de acidentes.</Li>
                        <Li>Maior produtividade e eficiencia.</Li>
                        <Li>Instalação sem deslocar o cano.</Li>
                        <Li>Red Belt indicativo para a substituição.</Li>
                    </ul>
                    
                </IndexText>
            </LeftRight>

            <LeftRight  src={img2} center alt="ureply-tracbras-revestimiento-poliuretano-img2">
                <IndexText color="#357C39">
                    <h2>COMPARATIVO</h2>
                    <p>Comparamos e pagamos os tres cenários mais frequentes para otimizar o uso dos tubos na plant. Aproveitando suas voltas, revesti-lo de novo, revistilo-lo usado.</p>
                    
                </IndexText>
            </LeftRight>

            <LeftRight src={img3} alt="ureply-tracbras-revestimiento-poliuretano-img3">
                <IndexText color="#357C39">
                    <h2>APLICAÇÕES</h2>
                    <ul>
                        <Li>Terminais portuários.</Li>
                        <Li>Indústrias de óleo.</Li>
                        <Li>Unidades de armezéns.</Li>
                        <Li>Usinas.</Li>
                        <Li>Canos redondos e quadrados.</Li>
                        <Li>Cabecas de elevadores.</Li>
                        <Li>Distribuidores.</Li>
                        <Li>Freios e curvas.</Li>
                        <Li>Secadoras.</Li>
                        <Li>Pescantes de descara portuária.</Li>
                    </ul>
                </IndexText>
            </LeftRight>

            <LeftRight src={img4} center alt="ficha-tecnica-ureply-tracbras-revestimiento-poliuretano-img">
                <IndexText color="#357C39">
                    <h2>ESPECIFICAÇÕES TÉCNICAS</h2>
                    <p>Um resumo detalhado das características Técnicas do producto e sus modelos.
                    Para mais informação peca as Fichas técnicas aos nossos consultores.</p>
                </IndexText>
            </LeftRight>

            <LeftRight src={img5}  center alt="instalação-ureply-tracbras-revestimiento-poliuretano-img">
                <IndexText color="#357C39">
                    <h2>INSTALAÇÃO</h2>
                    <p>Mostramos como instalar UREPLY MAX correctamente, para evitar problemas técnicos mais tarde.</p>
                </IndexText>
            </LeftRight>       
            <Footer />     
        </>
    );
}

export default Ureply;