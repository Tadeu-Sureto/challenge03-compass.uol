import React from 'react';
import { Link } from "react-router-dom";
import './Register.css'
import Sideimg from '../assets/side image.png';

const Register: React.FunctionComponent = () => {

let nameInput = document.getElementById('name') as HTMLInputElement;
let userInput = document.getElementById('user') as HTMLInputElement;
let birthInput = document.getElementById('birth') as HTMLInputElement;
let emailInput = document.getElementById('email') as HTMLInputElement;
let passwordInput = document.getElementById('password') as HTMLInputElement;
let confirmInput = document.getElementById('confirm') as HTMLInputElement;

function updateForm(event: React.ChangeEvent<HTMLInputElement>) {
  nameInput = document.getElementById('name') as HTMLInputElement;
  userInput = document.getElementById('user') as HTMLInputElement;
  birthInput = document.getElementById('birth') as HTMLInputElement;
  emailInput = document.getElementById('email') as HTMLInputElement;
  passwordInput = document.getElementById('password') as HTMLInputElement;
  confirmInput = document.getElementById('confirm') as HTMLInputElement;

}

function validateForm(event: React.SyntheticEvent<HTMLFormElement>) {
  event.preventDefault();

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

  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
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
    console.log(nameInput.value);
    console.log(userInput.value);
    console.log(birthInput.value)
    console.log(emailInput.value);
    console.log(passwordInput.value);
    console.log(confirmInput.value);
    document.getElementById('textForm')!.innerHTML = '';
    const successMsg = document.createElement('p');
    successMsg.textContent = 'Registro efetuado com sucesso!';
    successMsg.style.color = '#E9B425';
    document.getElementById('textForm')!.appendChild(successMsg);
  }
}else{
  document.getElementById('textForm')!.innerHTML = 'Por favor, preencha todos<br>os campos corretamente.';
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

    return (
        <main>
        <header>
        
            <div className="apresentacao">
                <h1>Olá,</h1>
                <p className="mensagem">Por favor, registre-se para continuar</p>
            </div>
            
    
            <section className="inputs">
                <h2>Registro</h2>
                <form className="registration-data" onSubmit={validateForm}>
                    <div className="name">
                        <input className="user-name" type="text" id="name" placeholder="Nome" onChange={updateForm}/>
                        <img className="user-img" src="images/Name.png" alt='' />
                    </div>
                    
                    <div className="user">
                        <input className="string-user" type="text" id="user" placeholder="Usuário" onChange={updateForm}/>
                        <img className="user-name-img" src="images/UserName.png" alt='' />
                    </div>

                    <div className="birth">
                        <input className="birth-date" type="text" onFocus={(e) => (e.target.type = 'date')} id="birth" placeholder="Nascimento" onChange={updateForm}/>
                        <img className="img-birth" src="images/Birth.png" alt='' />
                    </div>

                    <div className="mail">
                        <input className="e-mail" type="text" id="email" placeholder="Email" onChange={updateForm}/>
                        <img className="img-mail" src="images/Mail.png" alt='' />
                    </div>

                    <div className="pass">
                        <input className="password" type="password" id="password" placeholder="Senha" onChange={updateForm}/>
                        <img className="pass-img" src="images/Password.png" alt='' />
                    </div>

                    <div className="confirm-pass">
                        <input className="confirm" type="password" id="confirm" placeholder="Confirmar Senha" onChange={updateForm}/>
                        <img className="confirm-pass-img" src="images/ConfirmPass.png" alt='' />
                    </div>
                    
                    <button type="submit">Registrar-se</button>

                    <small id="textForm"></small>

                    <p>Já possui uma conta? &nbsp;<Link to="/Login">Faça Login</Link></p>

                    <p id="register-success" className="hidden">Registro Efetuado Com Sucesso</p>
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