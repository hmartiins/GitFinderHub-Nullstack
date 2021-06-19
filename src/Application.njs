import Nullstack from 'nullstack';
import './Application.scss';
import Profile from './components/Profile/Profile.njs';

import axios from 'axios';

class Application extends Nullstack {
  data = [];
  searchInput = "";
  responseApi;

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head> 
    )
  }

  renderInput() {
    return(
      <input 
        bind={this.searchInput}
        value={this.searchInput}
        type="text"
        placeholder="username"
      />
    );
  }

  async searchProfile() {
    await axios.get(`https://api.github.com/users/${this.searchInput}`)
      .then((response) => this.responseApi = response.data);
  }


  render() {
    return (
      <main>
        <Head />
        <header class="header">
          <Input />
          <button onclick={this.searchProfile}>Buscar</button>
        </header>
        {
          this.responseApi == undefined ? undefined : <Profile 
            avatar_url={this.responseApi.avatar_url}
            name={this.responseApi.name}
            bio={this.responseApi.bio}
            followers={this.responseApi.followers}
            following={this.responseApi.following}
            public_repos={this.responseApi.public_repos}
            location={this.responseApi.location}
          />
        }
      </main>
    )
  }

}

export default Application;