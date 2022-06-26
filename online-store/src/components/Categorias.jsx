import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
  state = {
    categorias: [],
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categorias = await getCategories();
    this.setState({
      categorias,
    });
  };

  render() {
    const { categorias } = this.state;
    const { handleButton } = this.props;

    return (
      <div className="inline-block ml-2 w-40">
        {categorias.map((categoria) => (
          <div key={ categoria.id } className="flex flex-col p-2 w-40">
            <label htmlor={ categoria.name } className="flex items-center gap-1">
              <input
                type="radio"
                data-testid="category"
                name={ categoria.name }
                onClick={ handleButton }
              /> <p className="text-sm">{ categoria.name }</p>
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Categorias.propTypes = {
  handleButton: PropTypes.func.isRequired,
};

export default Categorias;
