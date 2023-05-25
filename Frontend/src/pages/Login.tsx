import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import Sideimg from '../assets/side image.png';
import User from '../assets/User.png';
import Password from '../assets/Password.png';

import Social from './Social';

interface Posts {
  "user": string;
  "post-date": string;
  "description": string;
  "likes": number;
  "comments": {
      "user": string;
      "comment": string;
  }[],
  "url-imagem": string;
}

interface Users {
  name: string;
  user: string;
  birthdate: string;
  email: string;
  password: string;
  profile_photo: string;
}

interface UserPattern {
  name: string;
  user: string;
  birthdate: string;
  email: string;
  profile_photo: string;
}

interface BodyRequest {
  username: string;
  password: string;
}

interface PostResponse { 
  login: boolean, 
  userData: {
    name: string;
    user: string;
    email: string;
    birthdate: string;
    profile_photo: string;
  }
}


const Login: React.FunctionComponent = () => {

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [login, setLogin] = React.useState<boolean>(false);
  const [users, setUsers] = React.useState<Users[]>([{
    name: "",
    user: "",
    birthdate: "",
    email: "",
    password: "",
    profile_photo: "",
  }]);
  const [user, setUser] = React.useState<UserPattern>({
    name: "",
    user: "",
    birthdate: "",
    email: "",
    profile_photo: "",
  })
  const [posts, setPost] = React.useState<Posts[]>([{
    user: "",
    "post-date": "",
    description: "",
    likes: 0,
    comments: [{
        user: "",
        comment: "",
    }],
    "url-imagem": ""
  }]);

  useEffect(() => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const form = document.querySelector("form") as HTMLFormElement;
    const textForm = document.getElementById("textForm") as HTMLDivElement;

    form.addEventListener("submit", (e: Event) => {
      if (email.value === "" || password.value === "") {
        textForm.textContent = "Necessário preencher todos os campos";
        changeBorderColor(email, "#E9B425");
        changeBorderColor(password, "#E9B425");
      } else if (validationEmail(email.value) && validationPassword(password.value)) {
        console.log(email.value);
        console.log(password.value);
        textForm.textContent = "Login efetuado!";
        changeBorderColor(email, "");
        changeBorderColor(password, "");
      } else {
        changeBorderColor(email, "#E9B425");
        changeBorderColor(password, "#E9B425");
      }
      e.preventDefault();
    });

    email.addEventListener("keyup", () => {
      if (!validationEmail(email.value)) {
        textForm.innerHTML = "Usuário e/ou senha inválidos.<br>Por favor, tente novamente!";
        changeBorderColor(email, "#E9B425");
      } else {
        textForm.textContent = "";
        changeBorderColor(email, "");
      }
    });

    password.addEventListener("keyup", () => {
      if (!validationPassword(password.value)) {
        textForm.innerHTML = "Usuário e/ou senha inválidos.<br>Por favor, tente novamente!";
        changeBorderColor(password, "#E9B425");
      } else {
        textForm.textContent = "";
        changeBorderColor(password, "");
      }
    });
  }, []);

  function validationEmail(email: string) {
    const emailPrototype = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPrototype.test(email);
  }

  function validationPassword(password: string) {
    const passwordPrototype = /^[a-z0-9.!@#$%&*+-]{6,}$/i;
    return passwordPrototype.test(password);
  }

  function changeBorderColor(element: HTMLInputElement, color: string) {
    if (color !== "") {
      if (element.value === "") {
        element.style.borderColor = color;
      } else {
        element.style.borderColor = "";
      }
    } else {
      element.style.borderColor = "";
    }
  }

  const fetchSocialAPI = async (URL: string, method: string, body: BodyRequest | undefined = undefined) => {
     return fetch(URL, {
        method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        return data;
    })
  }


  const makePOST = async (): Promise<PostResponse> => {
    return fetchSocialAPI("http://localhost:3100/api/v1/login", "POST", {username, password})
  }

  const getUsers = async (): Promise<Users[]> => {
    return fetchSocialAPI("http://localhost:3100/api/v1/users", "GET");
  }

  const getPosts = async (): Promise<Posts[]> => {
    return fetchSocialAPI("http://localhost:3100/api/v1/user/posts", "GET");
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const message = document.getElementById("textForm") as HTMLElement;
    message.innerHTML = "";

    console.log(
      {
        user: username, pass: password
      }
    )

    const data = await makePOST()
    

    if(data.login) {
      const users = await getUsers();
      const post = await getPosts();

      setLogin(data.login)
      setUser(data.userData);
      setUsers(users);
      setPost(post);
    } else {
      message.innerHTML = "Usuário não encontrado";
    }
  }

  if(login) {
    console.log(user)
    return <Social user={user} users={users} posts={posts} />
  }

  return (
    <main>
      <header>
        <div className="apresentacao">
          <h1>Olá,</h1>
          <p className="mensagem">Para continuar navegando de forma segura, efetue o login</p>
        </div>
  
        <section className="inputs">
          <h2>Login</h2>
          <form className="login-data" method='POST' onSubmit={handleSubmit}>
            <div className="user">
              <input className="user-name" name='username' type="text" id="email" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} />
              <img className="img-user" src={User} alt='' />
            </div>
  
            <div className="password">
              <input className="user-password" name="password" type="password" id="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
              <img className="img-password" src={Password} alt='' />
            </div>
  
            <button type="submit">Logar-se</button>
  
            <small id="textForm"></small>
  
            <p>Novo por aqui? &nbsp;<Link to="/Register">Registre-se</Link></p>
  
            <p id="login-success" className="hidden">Login Efetuado Com Sucesso</p>
          </form>
        </section>
      </header>
  
      <div className="image">
        <img src={Sideimg} title="Imagem COMPASS.UOL" alt="Imagem que apresenta um notebook com o logo da COMPASS.UOL" />
      </div>
    </main>
  );
}

export default Login;
