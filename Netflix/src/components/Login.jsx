import React from "react";
import PropTypes from 'prop-types';
import '../css/Login.css';
import { Loading } from "./Loading";
import { createUser } from "../services/userApi";

export class Login extends React.Component {
  state = {
    login: '',
    loading: false,
  };

  onInputChange = ({ target: { value } }) => this.setState({ login: value });

  handlePage = async () => {
    const { login } = this.state;
    const { history } = this.props;
    this.setState(() => ({ loading: true }));
    await createUser({ name: login });
    history.push('/home');
  };

  render() {
    const { login, loading } = this.state;
    const n3 = 3;
    return (
      <div>
      {loading ? <Loading />
      : (
        <>
          <h1 className="text-zinc-100 text-center mt-[120px] text-[110px]">NETFLIX</h1>
          <div className="flex flex-col items-center mt-[20px]">
            <form className="flex flex-col gap-3">
              <input type="text" onClick={ this.onInputChange } placeholder="Digite o Seu Usuário" className="bg-zinc-700 w-[450px] h-[50px] p-4 text-zinc-200" />
              <input type="password" placeholder="Digite a Sua Senha" className="bg-zinc-700 h-[50px] p-4 text-zinc-200" />
              <button type="submit" onClick={ this.handlePage } disabled={ login.length < n3 } className="flex justify-center items-center m-auto border border-1 border-neutral-900 w-[75px] h-[40px] text-zinc-800 bg-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 hover:cursor-pointer">Entrar</button>
            </form>
          </div>
        </>
      )}
    </div>
    )
  }

}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
