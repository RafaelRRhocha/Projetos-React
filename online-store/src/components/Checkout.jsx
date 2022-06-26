import React from 'react';

export default class Checkout extends React.Component {
  render() {
    return (
      <div className="flex justify-center mt-[50px]">
        <form className="flex flex-col">
          <label htmlFor="checkout-fullname" className="flex flex-col">
            Nome Completo:
            <input name="checkout-fullname" data-testid="checkout-fullname" className="ml-3 w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
          </label>
          <label htmlFor="checkout-email" className="flex flex-col">
            Email:
            <input name="checkout-email" type="email" data-testid="checkout-email" className="ml-3 w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
          </label>
          <label htmlFor="checkout-cpf" className="flex flex-col">
            CPF:
            <input name="checkout-cpf" data-testid="checkout-cpf" className="ml-3 w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
          </label>
          <label htmlFor="checkout-phone" className="flex flex-col">
            Telefone:
            <input name="checkout-phone" data-testid="checkout-phone" className="ml-3 w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
          </label>
          <label htmlFor="checkout-cep" className="flex flex-col">
            CEP:
            <input name="checkout-cep" data-testid="checkout-cep" className="ml-3 w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
          </label>
          <label htmlFor="checkout-address" className="flex flex-col">
            Endereço:
            <input name="checkout-address" data-testid="checkout-address" className="ml-3 w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
          </label>
        </form>
      </div>
    );
  }
}
