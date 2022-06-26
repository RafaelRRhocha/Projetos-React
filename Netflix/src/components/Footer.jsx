import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <div className="border-t text-zinc-100 text-center p-1 mt-16">
        <div className="mt-1 mb-1">
          <p>Desenvolvido por Rafael Rocha - Junho de 2022</p>
          <p>Todos os Direitos de Imagem Reservados a <a href="https://www.netflix.com/br/" target="_blank" className="underline decoration-1 hover:cursor-pointer" rel="noreferrer">Netflix</a></p>
        </div>
      </div>
    )
  }
}