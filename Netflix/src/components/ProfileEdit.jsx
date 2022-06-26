import React from 'react';
import { readUser, saveUser } from '../services/userApi';
import profile from '../assets/profileImage.png';
import PropTypes from 'prop-types';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export class ProfileEdit extends React.Component {
  state = {
    user: {},
    profileImage: '',
  }

  componentDidMount() {
    this.getUserState();
  }

  onInputChange = ({ target: { value } }) => this.setState({ profileImage: value });

  getUserState = () => {
    const updateUser = readUser();
    this.setState({ user: updateUser });
  };

  setBack = () => {
    this.props.history.push('/profile');
    document.location.reload(true);
  };

  saveProfile = () => {
    const { user, profileImage } = this.state;
    saveUser({ name: user.name, endEmail: user.endEmail, profile: profileImage });
    this.props.history.push('/home');
    document.location.reload(true);
  }

  render() {
    const { user, profileImage } = this.state;
    const userProfileImageStorage = <img src={!user.profile ? profile : user.profile} alt="imagem de perfil" className="w-[100px] h-[100px]" />
    const userProfileImageNoStorage = <img src={profileImage.length <= 3 ? profile : profileImage} alt="imagem de perfil" className="w-[100px] h-[100px]" />
    return(
      <>
        <div className="text-zinc-100 flex justify-center mt-[15%]">
          <div className="flex">
            {!user.profile ? userProfileImageNoStorage : userProfileImageStorage}
            <div className="flex flex-col gap-2 ml-4">
              <p>{`Nome de Usuário: ${user.name}`}</p>
              <p>{`Endereço de Email: ${user.endEmail}`}</p>
              <input type="text" onChange={ this.onInputChange } placeholder="cole o link da sua imagem de perfil" className="p-1 text-zinc-800" />
            </div>
          </div>
        </div>
        <div className="text-zinc-100 text-center flex items-center justify-center gap-3 m-5">
          <ArrowLeft size={15} className="animate-pulse" />
          <button type="submit" onClick={ this.setBack }>Voltar</button>
          <button type="submit" onClick={ this.saveProfile }>Salvar Perfil</button>
          <ArrowRight size={15} className="animate-pulse" />
        </div>
      </>
    );
  }
}

ProfileEdit.propTypes =  {
  history: PropTypes.shape(() => ({
    push: PropTypes.func.isRequired,
  }))
}