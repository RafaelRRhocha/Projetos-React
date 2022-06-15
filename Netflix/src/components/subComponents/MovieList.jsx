import React from "react";
import PropTypes from 'prop-types';
import { Loading } from "./Loading";

export class MovieList extends React.Component {
  state = {
    loading: false,
  }

  componentDidMount() {
    this.setLoading();
  }

  setLoading = async () => this.setState({loading: false});

  render() {
    const { loading } = this.state;
    const { title, items } = this.props;
    return (
      <>
        {loading ? <Loading /> : (
          <div className="flex flex-col mb-[30px] mt-[17px]">
            <h1 className="text-[30px] ml-[30px]">{title}</h1>
            <div className="overflow-x-hidden">
              <div className="flex flex-row gap-6 ml-[30px]">
                {items.results.length > 0 && items.results.map((element, i) => (
                  <img src={`https://image.tmdb.org/t/p/w300/${element.poster_path}`} alt={title} key={i} className="w-[210px] scale-95 transition ease-in-out delay-100 hover:scale-100 hover:cursor-pointer duration-250" />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

MovieList.propTypes =  {
  title: PropTypes.string.isRequired,
  items: PropTypes.func.isRequired,
};
