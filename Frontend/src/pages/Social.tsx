import React from 'react'
import './Social.css';

import Logo from "../assets/compass.uol_negativo 1.png";
import VectorHome from "../assets/vector-home.png"
import Camera from "../assets/vector-cam.png";
import Photo from "../assets/vector-landscape.png";
import Clips from "../assets/vector-clips.png";
import Location from "../assets/vector-location.png";
import HappyFace from "../assets/vector-happy-face.png";
import Clock from "../assets/vector-clock.png";
import Divider from "../assets/divider.png";
import Like from "../assets/vector-like.png";
import Comments from "../assets/vector-comments.png";
import Share from "../assets/vector-share.png";

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

interface ComponentTypes {
    user: UserPattern;
    users: Users[];
    posts: Posts[];
}

const Social: React.FunctionComponent<ComponentTypes> = (props: ComponentTypes) => {
    
    console.log("POSTS:")
    console.log(props.posts)

    return (
    <div className="container">

        <div className="left-side-bar">
            <img className="img-logo" src={Logo} alt="Imagem Logo COMPASS.UOL"/>
        </div>


        <div className="header">
            <div className="header-img">
                <img src={VectorHome} alt="Pequeno Imagem de Uma Casa"/>
                <h3>Home</h3>
            </div>

            <div className="logged-in-user">
                <h3>{props.user.name}</h3>
                
                <img src={props.user.profile_photo} alt="Imagem de Exibição do Usuário"/>
            </div>
        </div>

        <div className="my-post">
            <div className="img-and-post">
                <img className="img-post-user" src={props.user.profile_photo} alt="Imagem de Exibição do Usuário"/>
                <textarea className="input-my-post" placeholder="No que você está pensando?" cols={110}></textarea>
            </div>
                
            <div className="vector-and-button">
                <ul>
                    <li><img src={Camera} alt="Pequena Imagem de Uma Câmera Fotográfica" /></li>
                    <li><img src={Photo} alt="Pequena Imagem de Uma Paisagem" /></li>
                    <li><img src={Clips} alt="Pequena Imagem de Um Clips de Papel" /></li>
                    <li><img src={Location} alt="Pequena Imagem de Um Ponto de Localização" /></li>
                    <li><img src={HappyFace} alt="Pequena Imagem de Um Rostinho Feliz" /></li>
                </ul>
            
                <button className='buttonclass'>Postar</button>
            </div>
        </div>

        <div className='posts_container'>            
            {props.posts && props.posts.map((post, i) => (
                    <div className="post" key={i}>
                    <div className="time-local-post">
                        <img className="img-user" src={props.users.find(user => user.user === post.user)?.profile_photo} alt="Imagem de Exibição de Usuário" />
                        <div className="name-vector">
                            <h3>{props.users.find(user => user.user === post.user)?.name}</h3>
                            <p><img src={Clock} alt="Pequena Imagem de um Relógio" /> &ensp; { new Date(post['post-date']).toLocaleString() }<span> Lindas Paisagens</span></p>
                        </div>
                    </div>
                    
                    <p className="post-user-logged">{post.description}</p>
                    
                    <img className="post-img" src={post['url-imagem']} alt="Imagem de Postagem" />
        
                    <div className="menu-img">
                        <ul>
                            <li className="li-01">
                                <img src={Like} alt="Imagem de Uma Mão Dando Sinal de Positivo" />
                                <button className="button-item">Curtidas</button>
                                <p className="quantity01">{post.likes}</p>
                            </li>
                            <li className="li-02">
                                <img className='' src={Comments} alt="Imagem de um Pequeno Balão" />
                                <button className="button-item">Comentários</button>
                                <p className="quantity02">{post.comments.length}</p>
                            </li>
                            <li className="li-03">
                                <img src={Share} alt="Imagem de Compatilhamento" />                            
                                <button className="button-item">Compartilhar</button>
                            </li>                        
                        </ul>
                    </div>
                    
                    <div className="post-users">
                        <img className="img-post-users" src={props.user.profile_photo} alt="Imagem de Exibição do Usuário"/>
                        <textarea className="input-post-users" placeholder="O que você está pensando?" cols={110}></textarea>
        
                        <div className="vector">
                            <ul>
                                <li><img src={Camera} alt="Pequena Imagem de Uma Câmera Fotográfica"/></li>
                                <li><img src={Photo} alt="Pequena Imagem de Uma Paisagem"/></li>
                                <li><img src={Clips} alt="Pequena Imagem de Um Clips de Papel"/></li>
                                <li><img src={Location} alt="Pequena Imagem de Um Ponto de Localização"/></li>
                                <li><img src={HappyFace} alt="Pequena Imagem de Um Rostinho Feliz"/></li>
                            </ul>
                        </div>
                    </div>
        
                    <div className="comments-container">
                        <h3 className="comments-title">Todos os comentários</h3>
                        <div className="comments-tags">
                            {post.comments.map((comment, i) => (
                                <div className='comments' key={i}>
                                    <img className="comments-img" src={props.users.find(user => comment.user === user.user)?.profile_photo} alt="Imagem de Exibição do Usuário" />
                                    <p className="comments-text"><strong>{props.users.find(user => comment.user === user.user)?.name}</strong> {comment.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
        
                    <img className="img-divider" src={Divider} alt="Pequena Quebra de Página" />
                    
                    <button className="see-all-posts">Ver todos os comentários</button>
                </div>
                )
            )}
        </div>

        <div className="sidebar_container">
            <div className="right-side-bar-top">
                <p className="p-text">Meus Amigos</p>

                <div className="friends-list">
                    <ul className="ul-friends-list">
                        {props.users.map((friend, i) => (
                            <li key={i}>
                                <img src={friend.profile_photo} alt="Foto Contato"/>
                                <p>{friend.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="right-side-bar-middle"></div>

            <div className="right-side-bar-botton"></div>
        </div>
      </div>
    )
}


export default Social;