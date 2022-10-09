import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../config/ApiConfig';
import './styles.css'

export const Cadastro = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e:any) => {

    e.preventDefault();

    if(login.length <= 0) {
      alert('login vazio')
      return
  };

  if(password.length <= 0){
      alert('senha vazia')
      return
  };

    api.post('users/create', {login: login, password: password}).then(() => {
      navigate('/')
    }).catch((error) => alert(error));
  }

  return (
    <div className="container" >
      <div className="content">      
        <div id="login">
            <form onSubmit={handleSubmit}> 
              <h1>Cadastro</h1> 
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
                  <input type="submit" value="Logar" />
              </p>
              
              <p className="link">
                  Já possui conta?
                  <Link to='/'>Logar</Link>
              </p>
            </form>
        </div>
      </div>
    </div>
  )
}
