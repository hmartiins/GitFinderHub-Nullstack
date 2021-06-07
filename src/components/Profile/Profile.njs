import Nullstack from 'nullstack';
import './Profile.scss';

import axios from 'axios';

class Profile extends Nullstack {
  data = [];

  prepare({ page }) {
    page.title = 'Gitfinderhub';
  }

  async initiate() {
    await axios.get('https://api.github.com/users/hmartiins')
      .then((response) => {
        if(response) {
          this.data = response.data;
        }
      });

  }

  render() {
    return (
      <div class="profileCard">
        <header class="profileHeader">
          <h2>{this.data.name}</h2>
          <img src={this.data.avatar_url} alt="icon" width="75" height="75" />
        </header>
        <p>
          <span>bio: </span>{this.data.bio}
        </p>
        <p>
          <span>Seguidores:</span> {this.data.followers}
        </p>
        <p>
          <span>Seguindo:</span> {this.data.following}
        </p>
        <p>
          <span>Repositórios públicos:</span> {this.data.public_repos}
        </p>
        <p>
          <span>Localização:</span> {this.data.location}
        </p>
      </div>
    )
  }

}

export default Profile;