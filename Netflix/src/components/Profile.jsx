import React from 'react';
import PropTypes from 'prop-types';
import { readUser } from '../services/userApi';
import profileImageInitial from '../assets/profileImage.png';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export class Profile extends React.Component {
  setBack = () => this.props.history.push('/home');

  setProfileEdit = () => this.props.history.push('/profile/edit');

  render() {
    const user = readUser();
    return(
      <>
        <div className="flex gap-3 items-center justify-center mt-[200px] text-zinc-100">
          <img src={!user.profile ? profileImageInitial : user.profile} alt="imagem de perfil" className="w-[100px] h-[100px]" />
          <div className="flex flex-col gap-1">
            <p>{`Nome de Usuário: ${user.name}`}</p>
            <p>{`Endereço de Email: ${user.endEmail}`}</p>
          </div>
        </div>
        <form className="text-zinc-100 text-center flex items-center justify-center gap-3 m-5">
          <ArrowLeft size={15} className="animate-pulse" />
          <button type="submit" onClick={ this.setBack }>Voltar</button>
          <button type="submit" onClick={ this.setProfileEdit }>Editar Perfil</button>
          <ArrowRight size={15} className="animate-pulse" />
        </form>
      </>
    )
  }
}

Profile.propTypes =  {
  history: PropTypes.shape(() => ({
    push: PropTypes.func.isRequired,
  }))
}