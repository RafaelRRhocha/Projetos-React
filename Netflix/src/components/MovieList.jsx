import React from "react";
import PropTypes from 'prop-types';
import { CaretLeft, CaretRight, PlayCircle } from "phosphor-react";
import "../css/Main.css"

export class MovieList extends React.Component {
  state = {
    changeMovies: 0,
  }

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
    const { changeMovies } = this.state;
    const { title, items } = this.props;
    return (
      <>
        <div className="flex flex-col mt-[80px] changeOpacity scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin">
          <h1 className="text-[30px] ml-[30px]">{title}</h1>
          <div className="overflow-x-hidden">
            <div onClick={this.handleLeftMovies}>
              <CaretLeft size={32} className="absolute w-[40px] h-[305px] left-0 z-40 cursor-pointer opacity-0 changeOpacityAll"/>
            </div>
            <div onClick={this.handleRightMovies}>
              <CaretRight size={32} className="absolute w-[40px] h-[305px] right-0 z-40 cursor-pointer opacity-0 changeOpacityAll"/>
            </div>
            <div className="ml-[30px]">
              <div style={{ marginLeft: changeMovies, width: items.results.length * 150 }} className="flex flex-row gap-6 transitionMovies">
                {items.results.length > 0 && items.results.map((element, i) => (
                  <div key={i} className="flex flex-col relative">
                    <img src={`https://image.tmdb.org/t/p/w300/${element.poster_path}`} alt={title} className="max-w-[1000px] h-[315px] w-[210px] scale-95 transition ease-in-out delay-100 hover:scale-100 hover:cursor-pointer duration-250 hover:opacity-[.5] z-0" />
                    <div className="flex flex-col gap-4 justify-center items-center absolute w-[100%] h-[100%] z-[-1]">
                      <p className="text-[20px] text-center">{element.title}</p>
                      <p className="text-[20px] text-center">{element.name}</p>
                      <PlayCircle size={50} className="animate-pulse" />
                      <span>Assistir</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

MovieList.propTypes =  {
  title: PropTypes.string.isRequired,
  items: PropTypes.objectOf.isRequired,
};
