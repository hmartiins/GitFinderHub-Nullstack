import Nullstack from 'nullstack';
import './Profile.scss';

class Profile extends Nullstack {
  
  render() {
    return (
      <div>
        <header>
          <img src="icon-144x144.png" alt="icon" width="75" height="75" />
          <h2>hmartiins</h2>
        </header>
        <span>bio: Lorem ipsum dolor sit amet, consectetur adipisicing</span>
        <span>Seguidores: 15</span>
        <span>Seguindo: 15</span>
        <span>Repositórios públicos: 20</span>
        <span>Localização: Peruíbe</span>
      </div>
    )
  }

}

export default Profile;