import React from "react";
import PropTypes from 'prop-types';
import logo from '../../assets/netflix-icon-main.png';
import profile from '../../assets/profileImage.png';
import '../../css/Main.css';

export class Header extends React.Component {
  render() {
    const { name, bgHeader } = this.props;
    const allClass = "fixed z-50 top-0 left-0 right-0 h-[70px] flex justify-between";
    const allClassWithBg = "fixed z-50 top-0 left-0 right-0 h-[70px] flex justify-between changeBg";
    return (
      <header className={!bgHeader ? allClass : allClassWithBg}>
        <img src={logo} alt="imagem de perfil" className="ml-[30px]"/>
        <div className="flex gap-4 items-center mr-[40px]">
          <img src={profile} alt="imagem de perfil" className="w-[45px] h-[45px] rounded-sm hover:cursor-pointer img" />
          {bgHeader && <p className="underline decoration-1 hover:cursor-pointer text-zinc-100 p">{name}</p>}
        </div>
    </header>
    )
  }
}

Header.propTypes =  {
  name: PropTypes.string.isRequired,
  bgHeader: PropTypes.bool.isRequired,
};
