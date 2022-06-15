import React from "react"
import { readUser } from "../services/userApi";
import { getHomeList } from "../services/moviesApi";
import { MovieList } from "./subComponents/MovieList";
import { Footer } from "./subComponents/Footer";
import { Header } from "./subComponents/Header";

export class Home extends React.Component {
  state = {
    user: {},
    movies: [],
  };

  componentDidMount() {
    this.getUserState();
    this.loadAll();
  }

  getUserState = () => {
    const updateUser = readUser();
    this.setState({ user: updateUser });
  };

  loadAll = async () => {
    let list = await getHomeList();
    this.setState({ movies: list });
  }

  render() {
    const { user: { name, image }, movies } = this.state;
    return (
      <>
        <div>
          <Header name={name} image={image} />
        </div>
        <div>
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
