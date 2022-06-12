import React from 'react';
import Header from '../components/Header';

export default class Favorites extends React.Component {
  state = {
    favoriteSongs: [],
  }

  render() {
    const { favoriteSongs } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-favorites">
        {favoriteSongs.length === 0 && <p className="anotherAlbum">Nenhuma Música foi Favoritada</p>}
        </div>
      </>
    );
  }
}
