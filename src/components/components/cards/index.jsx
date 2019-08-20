import React from 'react';

//Styled-Components
import {
    H2Title,
    ContainerCards,
    CardSC
} from './styled';


//Assets
import img1 from '../../../img/index/index__card1.png';
import img2 from '../../../img/index/index__card2.png';
import img3 from '../../../img/index/index__card3.png';

function Cards() {
    return(
        <>

            <H2Title>Que dizem sobre nós</H2Title>
            <ContainerCards>
                <CardSC>
                    <img src={img1} alt="Syngenta"/>
                    <p>«O cliente demorou menos de 4 horas para baixar o cano, revestir com UREPLY e colocar novamente no local»</p>
                    <s>
                        Cesar E. González<br/>
                        <span>Gerente da Planta</span>
                    </s>
                </CardSC>
                <CardSC>
                    <img src={img2} alt="The andersons"/>
                    <p>«O cliente demorou menos de 4 horas para baixar o cano, revestir com UREPLY e colocar novamente no local»</p>
                    <s>
                        Cesar E. González<br/>
                        <span>Gerente da Planta</span>
                    </s>
                </CardSC>
                <CardSC>
                    <img src={img3} alt="Cargill"/>
                    <p>«O cliente demorou menos de 4 horas para baixar o cano, revestir com UREPLY e colocar novamente no local»</p>
                    <s>
                        Cesar E. González<br/>
                        <span>Gerente da Planta</span>
                    </s>
                </CardSC>
            </ContainerCards>
        </>
        )
}

export default Cards;