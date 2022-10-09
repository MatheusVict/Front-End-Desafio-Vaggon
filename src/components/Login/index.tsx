import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../config/ApiConfig';
import './styles.css'


export const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    interface IUserData {
        user: {login: string, password: string},
        token: string;
    };

    const handleSubmit =  async (e:any) => {

        e.preventDefault();

        if(login.length <= 0) {
            alert('login vazio')
            return
        };

        if(password.length <= 0){
            alert('senha vazia')
            return
        };

        await api.post('/users/login', {login: login, password: password}).then((result) => {
            
            const user: IUserData = result.data
            const token = user.token

            localStorage.setItem('token', token);

            navigate('/home')
        }).catch((error) => {
            alert(error)
        });
    };

  return (
        <div className="container" >
            
            
            <div className="content">      
            <div id="login">
                <form onSubmit={handleSubmit}> 
                <h1>Login</h1> 
                <p> 
                    <label htmlFor="nome_login">Seu nome</label>
                    <input id="nome_login" name="nome_login" 
                     type="text" 
                     placeholder="ex. Matheus Victor"
                     onChange={(e: any) => setLogin(e.target.value)}
                     />
                </p>
                
                <p> 
                    <label htmlFor="email_login">Sua senha</label>
                    <input id="email_login"
                     name="email_login" 
                      type="password" 
                      placeholder="ex. senha" 
                      onChange={(e:any) => setPassword(e.target.value)}
                      /> 
                </p>
                
                <p> 
                    <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
                    <label htmlFor="manterlogado">Manter-me logado</label>
                </p>
                
                <p> 
                    <input type="submit" value="Logar" />
                </p>
                
                <p className="link">
                    Ainda não tem conta?
                    <Link to='/cadastro'>Cadastre-se</Link>
                </p>
                </form>
            </div>
            </div>
        </div>
    )
};
