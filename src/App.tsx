import React, { useState,FormEvent } from 'react';
import './App.css';

function App() {
  const [user,setUser] = useState('');
  const [password,setPassword] = useState('');
  const [remember,setRemember] = useState(false);

  async function handleSubmit(event:FormEvent){
    event.preventDefault()


    if(user.length===0 || password.length===0){
      return alert('Insira usuário e senha')
    }

    //chamada api

    if(remember){
      //salvar token de verificação
    }


    //avançando para próxima tela



    //script a ser removido ao entrar em produção
    console.log({user,password, remember})

  }


  


  return (
    <div className="App">
      
      <header className="App-header">
        <div className= "App-Center">
          <p className="App-title">
            W3lcome
            </p>
          <form 
            className="App-form"
            onSubmit={handleSubmit}
            >
          <p className="App-subtitle">Página de Login</p>

          <div className="App-form-input-container">
            <input 
              className="input-text"
              type="text" 
              placeholder="Usuário"
              value={user}
              onChange={event=> setUser(event.target.value)}
              />
            <input 
              className="input-text"
              type="password" 
              placeholder="Senha"
              value={password}
              onChange={event=>setPassword(event.target.value)}/>
            <div className="App-form-checklist">
            <div>
            <input type="checkbox" 
              checked={remember}
              onChange={()=>{setRemember(!remember)}}
            />
            <span>Lembrar-me</span>
            

            </div>
            <a href="/">Esqueceu a senha</a>
            </div>
          </div>
          <div className="App-button-submit-container">
          <button className="App-button-submit" type="submit">
            Entrar
          </button>
          <div className= "App-button-container">
            <button className="App-button">
              <img style={{width: 20, height:20}} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail_Icon.svg" alt="gmail"/>
                Entrar pelo Gmail
            </button>
            <button className="App-button">
            <img style={{width: 20, height:20}} src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Plus_font_awesome.svg" alt="plus"/>

              Novo? Criar conta
            </button>
          </div>
          </div>
          

          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
