import React from 'react';
import PropTypes from 'prop-types';
import '../css/Main.css';
import imdb from '../assets/imdbIcon.png'

export class FeatureMovie extends React.Component {
  render() {
    const { feature } = this.props;
    const genres = [];
    for (const key in feature.genres) {
      genres.push(feature.genres[key].name);
    }
    const url = `https://image.tmdb.org/t/p/original${feature.backdrop_path}`;
    const imageImdb = <img src={imdb}  alt="imdb" className="w-[50px]" />;
    return(
      <div className="h-[100vh]">
          <div className="setShadowLeft">
            <img src={url}  alt="imagem do filme em destaque" className="relative gradientImage"/>
          </div>
          <div className="absolute top-[20%] left-10">
            <div className="text-zinc-100">
              <p className="text-[80px]">{feature.name}</p>
              <div className="flex gap-2">
                <p className="text-[30px] flex gap-2">{feature.vote_average} {imageImdb}</p>
                <p className="text-[30px] ml-5">{feature.number_of_seasons} temporada{feature.number_of_seasons > 1 && 's'}</p>
              </div>
            </div>
            <div className="text-zinc-100 max-h-[40%] max-w-[50%]">
              <p className="text-[17px] mt-5">{feature.overview}</p>
            </div>
            <div className="text-zinc-100 mt-5 flex gap-1">
              <strong>Gêneros:</strong><p>{genres}</p>
            </div>
          </div>
      </div>
    )
  }
}

FeatureMovie.propTypes =  {
  feature: PropTypes.func.isRequired,
}