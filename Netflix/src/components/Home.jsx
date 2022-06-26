import React from "react";
import { getHomeList, getMovieInfo } from "../services/moviesApi";
import { MovieList } from "./MovieList";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { FeatureMovie } from "./FeatureMovie";
import { Loading } from "./Loading";
import PropTypes from 'prop-types';

export class Home extends React.Component {
  state = {
    movies: [],
    bgHeader: false,
    feature: null,
    loading: false,
  };

  componentDidMount() {
    this.loadAll();
    this.setLoading();
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 10) { this.setState({bgHeader: true}) }
      if(window.scrollY < 10) { this.setState({bgHeader: false}) }
    })
  }

  setLoading = async () => {
    this.setState({loading: true});
    await getHomeList();
    this.setState({loading: false});
  };

  loadAll = async () => {
    let list = await getHomeList();
    let featureFilter = list.filter((item) => item.slug === 'trending');
    let randomFeatureMovie = Math.floor(Math.random() * (featureFilter[0].items.results.length - 1));
    let chosenMovie = featureFilter[0].items.results[randomFeatureMovie];
    let finalChosenMoviesWithAllInfos = await getMovieInfo(chosenMovie.id, 'tv');
    this.setState({ movies: list, feature: finalChosenMoviesWithAllInfos });
  }

  viewProfile = () => {
    this.props.history.push('/profile');
    document.location.reload(true);
  };

  render() {
    const { movies, bgHeader, feature, loading } = this.state;
    return (
      <>
        {loading ? <Loading /> : (
          <>
            <div>
              <Header bgHeader={bgHeader} viewProfile={ this.viewProfile } />
            </div>
            <div>
                {feature && <FeatureMovie feature={feature} />}
                <div className="text-zinc-100">
                  {movies.map((movies, i) => (
                    <MovieList key={i} title={movies.title} items={movies.items}/>
                  ))}
                </div>
            </div>
            <div>
              <Footer />
            </div>
          </>
        )}
      </>
    )
  }
}

Home.propTypes =  {
  history: PropTypes.shape(() => ({
    push: PropTypes.func.isRequired,
  }))
}
