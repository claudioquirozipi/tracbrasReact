import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';

//Styled-Components
import {
    ContainerForm,
    InputVerEvento,
    InputRadio,
    InputButton,
    ContainerInputs,
    Message,
    ContainerQR,
    ClouseSC,
    View1,
    View2,
    View3
} from './styled';

//Assets
import imgForm from '../../img/form/city.jpg';
import imgQr from '../../img/form/qrcode.png';


// firebase
var db = firebase.firestore();


//Function-Componenst
const Clouse = () => {
    return(
        <ClouseSC>
            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#6D8492"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            </Link>            
        </ClouseSC>
    )
};

function handleSubmit(e,setEvent, setCodeQR, name, phone, email) {
    e.preventDefault();
    db.collection("event").add({
        name: name,
        email: email,
        phone: phone,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        setEvent("false");
        setCodeQR("true");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("Hubo un error, intente más tarde.");
    });
    
}


function Form() {
    const [inputs, setInputs] = useState("false");
    const [event, setEvent] = useState("true");
    const [codeQR, setCodeQR] = useState("false");
    const [name,setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    function handleAsistir(e) {setInputs(e.target.value)};
    function handleName(e) {setName(e.target.value)};
    function handlePhone(e) {setPhone(e.target.value)};
    function handleEmail(e) {setEmail(e.target.value)};
    
    return(
        <ContainerForm>
            <form onSubmit={(e) => handleSubmit(e,setEvent, setCodeQR, name, phone, email)}>
                <View1 visible={event}>
                    <Clouse />
                    <h1>Queremos convidar você<br/>para o nosso evento</h1>
                    <InputVerEvento>
                        <img src={imgForm} alt="evento"/>
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">Ver evento</a>
                    </InputVerEvento>
                    <InputRadio>
                        <h2>Você vai participar do evento?</h2>
                        <div>
                            <input type="radio" name="Asistir" id="Si" value={true} onChange={handleAsistir}/>
                            <label htmlFor="Si"><div></div><p>sim</p></label>
                            
                            <input type="radio" name="Asistir" id="No" value={false} onChange={handleAsistir}/>
                            <label htmlFor="No"><div></div><p>não</p></label>             
                        </div>
                    </InputRadio>
                    <View2 visible={inputs}>
                        <ContainerInputs >
                            <div>
                                <label htmlFor="">Nome</label>
                                <input type="text" placeholder="Escreva algo" onChange={handleName} required/>
                            </div>
                            <div>
                                <label htmlFor="">telefone</label>
                                <input type="number" placeholder="Escreva algo" onChange={handlePhone} required/>
                            </div>
                            <div>
                                <label htmlFor="">E-mail</label>
                                <input type="email" placeholder="Escreva algo" onChange={handleEmail} required/>
                            </div>
                        </ContainerInputs>
                        <Message>Recibirá un código QR que será<br/>su estrada a este envento.</Message>
                        <InputButton/>
                    </View2>
                </View1>
                <View3 visible={codeQR}>
                    <ContainerQR>
                        <Clouse />
                        <h2>Estamos te<br/> esperando</h2>
                        <img src={imgQr} alt="Código QR"/>
                        <h3>123456789123</h3>
                        <article>
                            <h3>lugar</h3>
                            <p>
                                Rua Bentópolis. 146. Parque novo mundo
                                <br/>
                                São Paolo/SP 02181-080
                            </p>
                            <h3>Data e hora</h3>
                            <p>12/08/19 - 08:00 a 16:00</p>
                        </article>
                    </ContainerQR>
                </View3>
            </form>
        </ContainerForm>
    );
}

export default Form;