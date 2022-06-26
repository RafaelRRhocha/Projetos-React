import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingCart } from 'phosphor-react';

export default class CartButton extends React.Component {
  render() {
    const { redirectCart, total } = this.props;
    return (
      <div className="flex gap-1 items-center justify-end mr-16 mt-[-47px] hover:cursor-pointer">
        <ShoppingCart
          className="p-1 hover:animate-pulse"
          data-testid="shopping-cart-button"
          onClick={redirectCart}
          size={ 45 }
        />
        <p className="text-red-700" data-testid="shopping-cart-size">{total}</p>
      </div>
    );
  }
}

CartButton.propTypes = {
  redirectCart: PropTypes.func.isRequired,
};
