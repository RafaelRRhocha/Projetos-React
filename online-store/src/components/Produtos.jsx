import React from 'react';
import PropTypes from 'prop-types';
import { getQuery } from '../services/api';
import ProductCard from './ProductCard';
import Categorias from './Categorias';
import CartButton from './CartButton';
import SearchButton from './SearchButton';

export default class Produtos extends React.Component {
  state = {
    lista: [],
    query: '',
    cart: [],
  };

  componentDidMount() {
    if (localStorage.getItem('CartItem')) {
      this.setState({ cart: JSON.parse(localStorage.getItem('CartItem')) });
    }
  }

  addCartButton = ({ target }) => {
    const { id } = target;
    const { lista, cart } = this.state;

    const produto = lista.find((item) => item.id === id);

    const local = JSON.parse(localStorage.getItem('CartItem'));
    if (cart.length === 0) {
      produto.qntt = 1;
      this.setState({ cart: [produto] });
      return localStorage.setItem('CartItem', JSON.stringify([produto]));
    }
    if (local.some((element) => element.id === produto.id)) {
      const index = local.findIndex((element) => element.id === produto.id);
      local[index].qntt += 1;
      this.setState({ cart: local });
      return localStorage.setItem('CartItem', JSON.stringify(local));
    }
    if (local) {
      produto.qntt = 1;
      this.setState({ cart: [...local, produto] });
      return localStorage.setItem(
        'CartItem',
        JSON.stringify([...local, produto]),
      );
    }
  };

  handleChange = ({ target: { value } }) => this.setState({ query: value });

  handleSearchButton = async () => {
    const { query } = this.state;
    const getApiReq = await getQuery(query);
    this.setState({ lista: getApiReq });
  };

  handleButton = async ({ target: { name } }) => {
    const getApiReq = await getQuery(name);
    this.setState({ lista: getApiReq });
    console.log('essa é a trybe');
  };

  redirectCart = () => {
    const { history } = this.props;
    history.push('/cart');
  };

  render() {
    const { lista } = this.state;

    const cart = JSON.parse(localStorage.getItem('CartItem'));
    let total = 0;
    if (cart) {
      total = cart.reduce((acc, item) => acc + item.qntt, 0);
    }
    return (
      <div>
        <SearchButton handleChange={this.handleChange} handleSearchButton={ this.handleSearchButton }/>
        <div>
          <CartButton redirectCart={this.redirectCart} total={ total } />
        </div>
        <div>
          <Categorias
            addCartButton={ this.addCartButton }
            handleButton={ this.handleButton }
          />
        </div>
        {lista.length === 0 && (
          <p className="text-center text-base mt-[-100%] text-slate-600" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        <div className="flex flex-wrap max-w-[85%] justify-center my-[-100%] mr-[5%] m-auto">
          {lista.map((items, index) => (
            <ProductCard
              key={ index }
              name={ items.title }
              productImage={ items.thumbnail }
              price={ items.price }
              id={ items.id }
              freeShipping={ items.shipping.free_shipping }
              addCartButton={ this.addCartButton }
            />
          ))}
        </div>
      </div>
    );
  }
}

Produtos.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
