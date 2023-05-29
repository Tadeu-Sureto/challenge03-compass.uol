import React from 'react';
import { Link } from "react-router-dom";
import './Register.css'
import Sideimg from '../assets/side image.png';
import MakeRequest from '../hooks/MakeRequest';

const Register: React.FunctionComponent = () => {
  const [name, setName] = React.useState("");
  const [user, setUser] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");



let nameInput = document.getElementById('name') as HTMLInputElement;
let userInput = document.getElementById('user') as HTMLInputElement;
let birthInput = document.getElementById('birth') as HTMLInputElement;
let emailInput = document.getElementById('email') as HTMLInputElement;
let passwordInput = document.getElementById('password') as HTMLInputElement;
let confirmInput = document.getElementById('confirm') as HTMLInputElement;


async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
  event.preventDefault();

  if(validateInput()) {
    const body = {
      name,
      user,
      birth,
      email,
      password
    }
    
    const data = await MakeRequest("http://localhost:3100/users", "POST", body)
    console.log("RESPONSE:")
    console.log(data)

    if(data && !data["message"]) {
      document.getElementById('textForm')!.innerHTML = '';
      const successMsg = document.createElement('p');
      successMsg.textContent = 'Registro efetuado com sucesso!';
      successMsg.style.color = '#E9B425';
      document.getElementById('textForm')!.appendChild(successMsg);
    } else {
      document.getElementById('textForm')!.innerHTML = '';
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Falha no registro!';
      errorMsg.style.color = '#E9B425';
      document.getElementById('textForm')!.appendChild(errorMsg);
    }
  } else {
    document.getElementById('textForm')!.innerHTML = '';
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'Verifique suas credenciais';
    errorMsg.style.color = '#E9B425';
    document.getElementById('textForm')!.appendChild(errorMsg);
  }
}

function validateInput() {
  
  if (nameInput && userInput && birthInput && emailInput && passwordInput && confirmInput) {
    let valid = true;
    
  
    if (nameInput.value.trim() === '') {
      nameInput.style.borderColor = '#E9B425';
      valid = false;
    } else {
      nameInput.style.borderColor = '';
    }
  
    if (userInput.value.trim() === '') {
      userInput.style.borderColor = '#E9B425';
      valid = false;
    } else {
      userInput.style.borderColor = '';
    }
  
    const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim())) {
      emailInput.style.borderColor = '#E9B425';
      valid = false;
    } else {
      emailInput.style.borderColor = '';
    }
  
    const passwordPattern = /^(?=.*[A-Z]).{8,}$/;
    if (passwordInput.value.trim() === '' || !passwordPattern.test(passwordInput.value.trim())) {
      passwordInput.style.borderColor = '#E9B425';
      valid = false;
    } else {
      passwordInput.style.borderColor = '';
    }
  
    if (confirmInput.value.trim() === '') {
      confirmInput.style.borderColor = '#E9B425';
      valid = false;
      document.getElementById('textForm')!.innerHTML = 'Por favor, preencha todos<br>os campos corretamente.';
    } else if (confirmInput.value.trim() !== passwordInput.value.trim()) {
      confirmInput.style.borderColor = '#E9B425';
      passwordInput.style.borderColor = '#E9B425';
      document.getElementById('textForm')!.textContent = 'As senhas não correspondem.';
      valid = false;
    } else {
      confirmInput.style.borderColor = '';
      passwordInput.style.borderColor = '';
      document.getElementById('textForm')!.textContent = '';
    }
  
    const birthPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (birthInput.value.trim() === '') {
      birthInput.style.borderColor = '#E9B425';
      valid = false;
    } else if (!birthPattern.test(birthInput.value.trim())) {
      birthInput.style.borderColor = '#E9B425';
      valid = false;
    } else {
      birthInput.style.borderColor = '';
    }
  
    if (valid) {
      return true;
    } else {
      return false;
    }
  } else{
    document.getElementById('textForm')!.innerHTML = 'Por favor, preencha todos<br>os campos corretamente.';
    return false;
  }
}

if(birthInput){
  birthInput.addEventListener('input', () => {
  if (birthInput.value.trim() === '') {
    birthInput.style.borderColor = '#E9B425';
  } else {
    birthInput.style.borderColor = '';
  }
});
}

function handleInputChange(e: any) {
  if(e.target.name === "name") setName(e.target.value)
  if(e.target.name === "user") setUser(e.target.value)
  if(e.target.name === "birth") setBirth(e.target.value)
  if(e.target.name === "email") setEmail(e.target.value)
  if(e.target.name === "password") setPassword(e.target.value)
}


    return (
        <main>
        <header>
        
            <div className="apresentacao">
                <h1>Olá,</h1>
                <p className="mensagem">Por favor, registre-se para continuar</p>
            </div>
            
    
            <section className="inputs">
                <h2>Registro</h2>
                <form className="registration-data" onSubmit={handleSubmit}>
                    <div className="name">
                        <input className="user-name" type="text" name='name' id="name" placeholder="Nome" onChange={handleInputChange}/>
                        <img className="user-img" src="images/Name.png" alt='' />
                    </div>
                    
                    <div className="user">
                        <input className="string-user" name='user' type="text" id="user" placeholder="Usuário" onChange={handleInputChange}/>
                        <img className="user-name-img" src="images/UserName.png" alt='' />
                    </div>

                    <div className="birth">
                        <input className="birth-date" name='birth' type="text" onFocus={(e) => (e.target.type = 'date')} id="birth" placeholder="Nascimento" onChange={handleInputChange}/>
                        <img className="img-birth" src="images/Birth.png" alt='' />
                    </div>

                    <div className="mail">
                        <input className="e-mail" name='email' type="text" id="email" placeholder="Email" onChange={handleInputChange}/>
                        <img className="img-mail" src="images/Mail.png" alt='' />
                    </div>

                    <div className="pass">
                        <input className="password" name='password' type="password" id="password" placeholder="Senha" onChange={handleInputChange}/>
                        <img className="pass-img" src="images/Password.png" alt='' />
                    </div>

                    <div className="confirm-pass">
                        <input className="confirm" name='confirmPass' type="password" id="confirm" placeholder="Confirmar Senha" onChange={handleInputChange}/>
                        <img className="confirm-pass-img" src="images/ConfirmPass.png" alt='' />
                    </div>
                    
                    <button type="submit">Registrar-se</button>

                    <small id="textForm"></small>

                    <p>Já possui uma conta? &nbsp;<Link to="/Login">Faça Login</Link></p>
                </form>
            </section>
           
        </header>
    
        <div className="image">
            <img src={Sideimg} title="Imagem COMPASS.UOL" alt="Imagem que apresenta um notebook com o logo da COMPASS.UOL" />
        </div>

    </main>
    )
}

export default Register;