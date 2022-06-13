import React from "react";
import PropTypes from 'prop-types';
import '../css/Login.css';

export function Login({ history }) {
  const handlePage = () => history.push('/home');

  return (
    <div>
      <h1 className="text-zinc-100 text-center mt-[120px] text-[80px]">NETFLIX</h1>
      <div className="flex flex-col items-center mt-[50px]">
        <form className="flex flex-col gap-2">
          <input type="text" placeholder="Digite o Seu Usuário" className="bg-zinc-700 w-[450px] h-[50px] p-4" />
          <input type="password" placeholder="Digite a Sua Senha" className="bg-zinc-700 h-[50px] p-4" />
          <button type="submit" onClick={ handlePage } className="flex justify-center items-center m-auto border border-1 border-neutral-900 w-[75px] h-[40px] text-zinc-800 bg-zinc-300 hover:bg-zinc-800 hover:text-zinc-100">Entrar</button>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
