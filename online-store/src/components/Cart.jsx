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
      <div>
        {cart === null ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          cart?.map((items, index) => (
            <div key={ index }>
              <div className="flex items-center gap-1">
                <img className="w-[150px]" src={ items.thumbnail } alt="produto do carrinho" />
                <p data-testid="shopping-cart-product-name">{items.title}</p>
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
        <Link data-testid="checkout-products" to="/checkout">
          Finalizar Compra
        </Link>
      </div>
    );
  }
}
