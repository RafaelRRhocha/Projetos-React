import React from "react";
import PropTypes from 'prop-types';
import logo from '../../assets/netflix-icon.svg';

export class Header extends React.Component {
  render() {
    const { name, image } = this.props;
    return (
      <header className="bg-[#0d1117] text-zinc-100 border-b">
      <div className="flex justify-between items-center">
        <p className="p-4 text-[30px] ml-[14px]">{`Bem vindo! ${name}`}</p>
        <img src={logo} alt="imagem de perfil" />
        <div className="flex gap-4 items-center mr-[40px]">
          <img src={image} alt="imagem de perfil" className="w-[65px] h-[65px] rounded-full hover:cursor-pointer" />
          <p className="underline decoration-1 hover:cursor-pointer">{name}</p>
        </div>
      </div>
    </header>
    )
  }
}

Header.propTypes =  {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
