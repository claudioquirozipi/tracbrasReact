import React from 'react';

//Styled-Components
import {
    H2Title,
    ContainerCards,
    CardSC
} from './styled';


//Assets
import img3 from '../../../img/index/index__card1.png';
import img1 from '../../../img/index/index__card2.jpg';
import img2 from '../../../img/index/index__card3.jpg';

function Cards() {
    return(
        <>

            <H2Title>Que dizem sobre nós</H2Title>
            <ContainerCards>
                <CardSC>
                    <img src={img1} alt="Syngenta"/>
                    <p>"Já foram passadas pelo revestimento UREPLY MAX mais de 2 milhões de toneladas entre farinha e soja. Sem duvida diminuímos o nossos custos de manutenção".</p>
                    <s>
                    DAMIAN SAVA<br/>
                        <span> Gerente operativo, Puerto del guazu</span>
                    </s>
                </CardSC>
                <CardSC>
                    <img src={img2} alt="The andersons"/>
                    <p>“O baixo peso das correias fez com que reduzamos tempos e temos mais facilidades nas horas de manutenção também constatamos que houve uma economia de 25% de energia”.</p>
                    <s>
                    EVANDRO SILVA DE FREITAS<br/>
                        <span> Gerente de manutenção, BRF</span>
                    </s>
                </CardSC>
                <CardSC>
                    <img src={img3} alt="Cargill"/>
                    <p>"Conseguimos resultados muito bons com as correias DAUER em nossos equipamentos".</p>
                    <s>
                        RODRIGO BERTOLOTTI<br/>
                        <span>Supervisor de manutenção, Bunge</span>
                    </s>
                </CardSC>
            </ContainerCards>
        </>
        )
}

export default Cards;