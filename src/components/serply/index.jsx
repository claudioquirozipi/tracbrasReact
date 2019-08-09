import React from 'react';

//Components
import Header2 from '../components/header/header2';
import LeftRight from '../components/leftRight';
import IndexText from '../components/leftRight/indexText';
import Footer from '../components/footer';
import Seo from '../seo';

//Styled-Components
import {H1Title} from '../components/leftRight/styled';

//Assets 
import bgImg from '../../img/header/banner-serply.png';
import logo from '../../img/header/logoSerply.png';
import img1 from '../../img/serply/emendas-serply-technical-service-advice-tracbras.png';
import img2 from '../../img/serply/goma-polias-serply-technical-service-advice-tracbras.png';
import img3 from '../../img/serply/perfurada-tiras-serply-technical-service-advice-tracbras.png';
import img4 from '../../img/serply/broches-correias-transportadoras-serply-technical-service-advice-tracbras.png';

function Serply() {
    return(
        <>
            <Seo 
                title="Serve conselhos técnicos."
                description="Serviços Técnicos e Assessoria.
                O procedimento que usamos é adaptado à tecnologia de fabricação de nossos cintos.
                É feito com prensas de última geração com controles precisos de temperatura e pressão."
            />
            <Header2 bgImg={bgImg} logo={logo}/>
            <H1Title>Serve conselhos técnicos</H1Title>
            <LeftRight src={img1}  reverse alt={"emendas-serply-technical-service-advice-tracbras"}>
                <IndexText color="#B4632C">
                    <h2>VANTAGENS</h2>
                    <p>
                        Prestamos serviços de emendas vulcanizadas tanto nas unidades como em nossa empresa.
                        O procedimento utilizado é Adaptado para as nossas correias.
                        O mesmo e efectuado com prensas de ultima geração tendo a temperatura e precisão adequadas. a Formar como e feita chama-se «emenda em z», com colocação de PVC, conseguindo uma flixibilidade e durabilidade extrema.
                        A Vantagem da emenda vulcanizada é que imediatamente após realizada já é possivel começar a trabalhar com a correia. isso faz com que ñao haja perda de tempo na produçao.
                    </p>
                </IndexText>
            </LeftRight>  

            <LeftRight src={img2} alt={"goma-polias-serply-technical-service-advice-tracbras"} >
                <IndexText color="#B4632C">
                    <h2>FURADO DAS CORREIAS</h2>
                    <p>O Furado das correias é totalmente automatizado, permitindo ter segurança, precisão e rapidez no serviço prestado.</p>
                </IndexText>
            </LeftRight>  

            <LeftRight src={img3}  reverse alt={"perfurada-tiras-serply-technical-service-advice-tracbras"}>
                <IndexText color="#B4632C">
                    <h2>CORREIA PUNCH</h2>
                    <p>A automação permite-nos fornecer uma garantia de realização, por sua vez, alcançar maior precisão e velocidade do serviço.</p>
                </IndexText>
            </LeftRight>  

            <LeftRight src={img4} alt={"broches-correias-transportadoras-serply-technical-service-advice-tracbras"} >
                <IndexText color="#B4632C">
                    <h2>OUTROS PRODUTOS COMERCIALIZADOS</h2>
                    <p>
                        Brocas para juntar correias transportadoras..
                        Parafusos de correia convencionais e revestidos.
                        Canecas de metal estampado.
                        Cola de guia e perfis.
                    </p>
                </IndexText>
            </LeftRight>  
            <Footer />
        </>
    );
}

export default Serply;