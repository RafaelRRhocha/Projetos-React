import React from "react";
import PropTypes from 'prop-types';
import logo from '../../assets/netflix-icon-main.png';
import profile from '../../assets/profileImage.png';
import '../../css/Main.css';
import { MagnifyingGlass } from "phosphor-react";

export class Header extends React.Component {
  state = {
    profileImage: '',
  }

  viewProfile = () => this.props.history.push('/profile');

  render() {
    const { profileImage } = this.state;
    const { name, bgHeader } = this.props;
    return (
      <header className="fixed z-50 top-0 left-0 right-0 h-[70px] flex items-center justify-between changeBg">
        <img src={logo} alt="imagem de perfil" className="ml-[30px]"/>
        <div className="flex gap-2 items-center">
          <input type="text" placeholder="Digite o Nome do Filme" className="h-6 w-[300px] text-zinc-800 p-1" />
          <MagnifyingGlass size={20} className="hover:cursor-pointer text-zinc-100"/>
        </div>
        <div onClick={ this.viewProfile } className="flex gap-4 items-center mr-[40px]">
          <img src={profileImage.length <= 3 ? profile : profileImage} alt="imagem de perfil" className="w-[45px] h-[45px] rounded-sm hover:cursor-pointer img" />
          {bgHeader && <p className="underline decoration-1 hover:cursor-pointer text-zinc-100 p">{name}</p>}
        </div>
    </header>
    )
  }
}

Header.propTypes =  {
  name: PropTypes.string.isRequired,
  bgHeader: PropTypes.bool.isRequired,
  history: PropTypes.shape(() => ({
    push: PropTypes.func.isRequired,
  }))
};
