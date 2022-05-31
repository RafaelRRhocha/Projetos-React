import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDetails } from '../services/api';
import Comments from './Comments';
import { ShoppingCart } from 'phosphor-react';

class Details extends React.Component {
  state = {
    detalhes: [],
    cart: [],
  };

  componentDidMount() {
    this.detalhes();
    if (localStorage.getItem('CartItem')) {
      this.setState({ cart: JSON.parse(localStorage.getItem('CartItem')) });
    }
  }

  detalhes = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const detalhe = await getDetails(id);
    this.setState({
      detalhes: detalhe,
    });
  };

  addCartButton = async () => {
    const { detalhes, cart } = this.state;

    if (cart.length === 0) {
      detalhes.qntt = 1;
      this.setState({ cart: [detalhes] });
      return localStorage.setItem('CartItem', JSON.stringify([detalhes]));
    }
    if (cart.some((element) => element.id === detalhes.id)) {
      const index = cart.findIndex((element) => element.id === detalhes.id);
      cart[index].qntt += 1;
      this.setState({ cart: [...cart] });
      return localStorage.setItem('CartItem', JSON.stringify(cart));
    }
  };

  render() {
    const { detalhes } = this.state;

    const cart = JSON.parse(localStorage.getItem('CartItem'));
    let total = 0;
    if (cart) {
      total = cart.reduce((acc, item) => acc + item.qntt, 0);
    }
    return (
      <div>
          <Link to="/cart" className="flex justify-end mr-[60px] gap-2 m-4 items-center hover:cursor-pointer">
            <ShoppingCart
              className="p-1 hover:animate-pulse"
              data-testid="shopping-cart-button"
              size={ 45 }
            />
            <p className="text-red-700" data-testid="shopping-cart-size">{total}</p>
        </Link>
        <div className="flex justify-center ml-[70px] w-[500px]">
          <div className="flex flex-col items-center gap-3">
            <img className="w-[200px]" src={ detalhes.thumbnail } alt="Imagem do produto" />
            <p data-testid="product-detail-name">{detalhes.title}</p>
            <p>{`R$ ${detalhes.price}`}</p>
            <button
              className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-400 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ this.addCartButton }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        <Comments id={ detalhes.id } />
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
