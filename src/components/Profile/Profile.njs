import Nullstack from 'nullstack';
import './Profile.scss';

class Profile extends Nullstack {
  
  render() {
    return (
      <div class="profileCard">
        <header class="profileHeader">
          <h2>hmartiins</h2>
          <img src="icon-144x144.png" alt="icon" width="75" height="75" />
        </header>
        <p>
          <span>bio: </span> Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
        <p>
          <span>Seguidores:</span> 15
        </p>
        <p>
          <span>Seguindo:</span> 15
        </p>
        <p>
          <span>Repositórios públicos:</span> 20
        </p>
        <p>
          <span>Localização:</span> Peruíbe
        </p>
      </div>
    )
  }

}

export default Profile;