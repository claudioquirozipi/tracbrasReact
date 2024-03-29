import React, {useState} from 'react';
import firebase from 'firebase';



//Assets
import imgName from '../../../img/footer/person.svg';
import imgEmail from '../../../img/footer/email.svg';
import imgWeb from '../../../img/footer/language.svg';
import imgPhone from '../../../img/footer/phone.svg';
import imgText from '../../../img/footer/comment.svg';

//Styled-Componets
import {
    FormSC,
    InputSC,
    ContainerButton
} from './styled';

var firebaseConfig = {
    apiKey: "AIzaSyBjfenAHZ4FrBWUSMqdUHuSUGruxy8Rycg",
    authDomain: "brtrasbras.firebaseapp.com",
    databaseURL: "https://brtrasbras.firebaseio.com",
    projectId: "brtrasbras",
    storageBucket: "brtrasbras.appspot.com",
    messagingSenderId: "905140490501",
    appId: "1:905140490501:web:242d4c792a0c504e"
};
   
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

//Functions
const InputTextarea = (props) => {
    const {type, placeholder, required ,onChange} = props;
    if(type === "textarea") {
        return(
            <textarea onChange={onChange}/>
        );
    }
    return(
        <input type={type} placeholder={placeholder} required ={required } onChange={onChange}/>
    )
}
const Input = (props) => {
    const {placeholder, src, type, required, onChange} = props;
    return(
        <InputSC>
            <img src={src} alt={placeholder} />
            <InputTextarea type={type} placeholder={placeholder} required ={required } onChange={onChange}/>
            
        </InputSC>
    );
}
function handleSubmit(e,name, email, web, phone, description) {
    e.preventDefault();
    db.collection("users").add({
        name: name,
        email: email,
        web: web,
        phone: phone,
        descrption: description
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("formFooter").reset();
        window.location.href="./ok"
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [web, setWeb]= useState("");
    const [phone, setPhone]= useState("");
    const [description, setDescription] = useState("");
    function handleSetName(e) {setName(e.target.value)};
    function handleSetEmail(e) {setEmail(e.target.value)};
    function handleSetWeb(e) {setWeb(e.target.value)};
    function handleSetPhone(e) {setPhone(e.target.value)};
    function handleSetDescription(e) {setDescription(e.target.value)};


    return(
        <FormSC id="formFooter" onSubmit={(e) =>handleSubmit(e, name, email, web, phone, description)}>
            <h4>Entre em contato conosco</h4>
            <p>
                Para manter-se a par de todas as novidades dos nossos serviços, 
                basta preencher este pequeno registro.
            </p>
            <Input placeholder="Nome" src={imgName} type={"Text"} required ={true} onChange={handleSetName}/>
            <Input placeholder="E-mail" src={imgEmail} type={"email"} required ={true} onChange={handleSetEmail}/>
            <Input placeholder="Web" src={imgWeb} type={"url"} required ={true} onChange={handleSetWeb}/>
            <Input placeholder="Telefone" src={imgPhone} type={"number"} onChange={handleSetPhone}/>
            <Input placeholder="Descrição" src={imgText} type={"textarea"} onChange={handleSetDescription}/>
            <ContainerButton>
                <input type="submit" value="Enviar"/>
            </ContainerButton>
        </FormSC>
    );
}

export default Form;