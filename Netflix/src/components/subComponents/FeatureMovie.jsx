import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Main.css';

export class FeatureMovie extends React.Component {
  render() {
    const { feature } = this.props;
    const url = `https://image.tmdb.org/t/p/original${feature.backdrop_path}`
    return(
      <div className="changeHW">
          <div className="setShadowLeft">
            <img src={url}  alt="imagem do filme em destaque" className="relative gradientImage"/>
          </div>
          <div className="absolute top-20 left-10">
            <div className="text-zinc-100">
              <p>{feature.original_name}</p>
              <div className="flex gap-2">
                <p>{feature.vote_average} pontos</p>
                <p>{feature.number_of_seasons} temporada{feature.number_of_seasons > 1 && 's'}</p>
              </div>
            </div>
            <div className="text-zinc-100">
              <p>{feature.overview}</p>
            </div>
            <div>
              <strong>Gêneros:</strong>
            </div>
          </div>
      </div>
    )
  }
}

FeatureMovie.propTypes =  {
  feature: PropTypes.objectOf.isRequired,
}