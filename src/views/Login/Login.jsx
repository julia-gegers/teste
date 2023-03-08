import React from 'react'
import './index.scss'
import Header from "../../components/Header/Header.jsx";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='login'>
        <Header/>

      <div className='login__form'>
        <div className='login__title'>
          <h1>Acesse com seu login ou cadastre-se!</h1>
          <h3>você pode entrar com o seu CPF</h3>
        </div>

        <div className='login__input'>
          <p>Digite seu CPF:</p>
          <input id='input1' type="text" placeholder='Nome completo' />

          <p>Senha:</p>
          <input id='input2' type="password" placeholder='******' />
        </div>
        <button id='btn'>
          <Link to={`/home`}>Entrar</Link>
        </button>
      </div>
    </section>
  )
}

export default Login