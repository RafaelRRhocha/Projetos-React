import React from "react"
import { readUser } from "../services/userApi";
import { getHomeList, getMovieInfo } from "../services/moviesApi";
import { MovieList } from "./subComponents/MovieList";
import { Footer } from "./subComponents/Footer";
import { Header } from "./subComponents/Header";
import { FeatureMovie } from "./subComponents/FeatureMovie";

export class Home extends React.Component {
  state = {
    user: {},
    movies: [],
    bgHeader: false,
    feature: null,
  };

  componentDidMount() {
    this.getUserState();
    this.loadAll();
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 10) { this.setState({bgHeader: true}) }
      if(window.scrollY < 10) { this.setState({bgHeader: false}) }
    })
  }

  getUserState = () => {
    const updateUser = readUser();
    this.setState({ user: updateUser });
  };

  loadAll = async () => {
    let list = await getHomeList();
    let featureFilter = list.filter((item) => item.slug === 'trending');
    let randomFeatureMovie = Math.floor(Math.random() * (featureFilter[0].items.results.length - 1));
    let chosenMovie = featureFilter[0].items.results[randomFeatureMovie];
    let finalChosenMoviesWithAllInfos = await getMovieInfo(chosenMovie.id, 'tv');
    this.setState({ movies: list, feature: finalChosenMoviesWithAllInfos });
  }

  render() {
    const { user: { name, image }, movies, bgHeader, feature } = this.state;
    return (
      <>
        <div>
          <Header name={name} image={image} bgHeader={bgHeader} />
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
    )
  }
}
