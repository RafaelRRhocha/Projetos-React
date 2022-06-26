import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Package } from 'phosphor-react';

class ProductCard extends React.Component {
  render() {
    const { name, productImage, price, id, addCartButton, freeShipping } = this.props;

    return (
      <div className="flex justify-center m-5">
        <div className="flex border border-1 w-[300px] h-[400px]">
          <div className="flex flex-col gap-3 m-4">
            <Link to={ `/details/${id}` } data-testid="product-detail-link">
              <div data-testid="product" className="flex flex-col gap-3 p-2 items-center">
                <img src={ productImage } alt="Product" className="w-[150px]" />
                <p className="text-center">{name}</p>
                <p>{`R$ ${price}`}</p>
                {freeShipping && (
                  <div className="flex items-center gap-1 animate-pulse">
                    <Package data-testid="free-shipping" size={32} /> <p>Frete Grátis</p>
                  </div>
                )}
              </div>
            </Link>
            <button
              className="px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-400 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
              type="button"
              data-testid="product-add-to-cart"
              id={ id }
              onClick={ addCartButton }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addCartButton: PropTypes.func.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default ProductCard;
