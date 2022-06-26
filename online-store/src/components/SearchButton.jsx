import React from "react";
import PropTypes from "prop-types";
import { MagnifyingGlass } from "phosphor-react";

export default class SearchButton extends React.Component {
  render() {
    const { handleChange, handleSearchButton } = this.props;
    return (
      <div className="flex gap-1 items-center py-2 justify-center">
        <input
          className="block w-[600px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          data-testid="query-input"
          onChange={handleChange}
          placeholder="digite o nome do produto"
        />
        <MagnifyingGlass
          className="inline-block hover:cursor-pointer"
          data-testid="query-button"
          onClick={handleSearchButton}
          size={ 20 }
        />
      </div>
    );
  }
}

SearchButton.propTypes = {
  handleSearchButton: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
