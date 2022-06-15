import React from "react";
import PropTypes from 'prop-types';
import { Loading } from "./Loading";
import { CaretLeft, CaretRight } from "phosphor-react";
import "../../css/Main.css"

export class MovieList extends React.Component {
  state = {
    loading: false,
    changeMovies: 0,
  }

  componentDidMount() {
    this.setLoading();
  }

  setLoading = async () => this.setState({loading: false});

  handleLeftMovies = () => {
    const { changeMovies } = this.state;
    let x = changeMovies + Math.round(window.innerWidth /2);
    if(x > 0) { x = 0 }
    this.setState({ changeMovies: x });
  }

  handleRightMovies = () => {
    const { items } = this.props;
    const { changeMovies } = this.state;
    let x = changeMovies - Math.round(window.innerWidth /2);
    let fixScrollRight = items.results.length * 150;
    if(window.innerWidth - fixScrollRight > x) { x = (window.innerWidth - fixScrollRight) -60 }
    this.setState({ changeMovies: x });
  }

  render() {
    const { loading, changeMovies } = this.state;
    const { title, items } = this.props;
    return (
      <>
        {loading ? <Loading /> : (
          <>
            <div className="flex flex-col mb-[30px] mt-[17px] changeOpacity">
              <h1 className="text-[30px] ml-[30px]">{title}</h1>
              <div className="overflow-x-hidden">
                <div onClick={this.handleLeftMovies}>
                  <CaretLeft size={32} className="absolute w-[40px] h-[305px] left-0 z-50 cursor-pointer opacity-0"/>
                </div>
                <div onClick={this.handleRightMovies}>
                  <CaretRight size={32} className="absolute w-[40px] h-[305px] right-0 z-50 cursor-pointer opacity-0"/>
                </div>
                <div className="ml-[30px]">
                  <div style={{ marginLeft: changeMovies, width: items.results.length * 150 }} className="flex flex-row gap-6 transitionMovies">
                    {items.results.length > 0 && items.results.map((element, i) => (
                      <img src={`https://image.tmdb.org/t/p/w300/${element.poster_path}`} alt={title} key={i} className="w-[210px] scale-95 transition ease-in-out delay-100 hover:scale-100 hover:cursor-pointer duration-250 hover:animate-pulse" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    )
  }
}

MovieList.propTypes =  {
  title: PropTypes.string.isRequired,
  items: PropTypes.func.isRequired,
};
