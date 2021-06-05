import Nullstack from 'nullstack';
import './RepositoryCard.scss';

class Profile extends Nullstack {
  
  render() {
    return (
      <div>
        <h2>hmartiins</h2>
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