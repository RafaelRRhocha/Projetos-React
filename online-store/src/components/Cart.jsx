import React from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component {
  state = {
    cart: [],
  };

  async componentDidMount() {
    const storage = await JSON.parse(localStorage.getItem('CartItem'));
    this.setState({ cart: storage });
  }

  increaseQuantity = ({ target: { id } }) => {
    const { cart } = this.state;
    const cartIncreaseQuantity = cart.map((elementIncrease) => {
      if (
        elementIncrease.id === id
        && elementIncrease.qntt < elementIncrease.available_quantity
      ) {
        elementIncrease.qntt += 1;
      }
      return elementIncrease;
    });
    this.setState({ cart: cartIncreaseQuantity });
    localStorage.setItem('CartItem', JSON.stringify(cartIncreaseQuantity));
  };

  decreaseQuantity = ({ target: { id } }) => {
    const { cart } = this.state;
    const cartDecreaseQuantity = cart.map((elementDecrease) => {
      if (elementDecrease.id === id && elementDecrease.qntt > 1) {
        elementDecrease.qntt -= 1;
      }
      return elementDecrease;
    });
    this.setState({ cart: cartDecreaseQuantity });
    localStorage.setItem('CartItem', JSON.stringify(cartDecreaseQuantity));
  };

  render() {
    const { cart } = this.state;
    return (
      <div className="flex flex-col items-center gap-5 m-7">
        {cart === null ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          cart?.map((items, index) => (
            <div key={ index } className="flex justify-center mt-5 p-2">
              <div className="flex items-center gap-4">
                <img className="w-[150px]" src={items.thumbnail} alt="produto do carrinho" />
                <div className="flex flex-col">
                  <p data-testid="shopping-cart-product-name">{items.title}</p>
                  <p>{`R$ ${items.price}`}</p>
                </div>
                <div className="flex flex-col">
                  <button
                    id={ items.id }
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ this.increaseQuantity }
                  >
                    +
                  </button>
                  <p data-testid="shopping-cart-product-quantity">{items.qntt}</p>
                  <button
                    id={ items.id }
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={ this.decreaseQuantity }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        <Link data-testid="checkout-products" to="/checkout" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
          Finalizar Compra
        </Link>
      </div>
    );
  }
}
