import Nullstack from 'nullstack';
import './Profile.scss';

class Profile extends Nullstack {
  prepare({ page }) {
    page.title = 'Gitfinderhub';
  }

  render({
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    location
  }) {
    return (
      <div class="profileCard">
        <header class="profileHeader">
          <img src={avatar_url} alt="icon" width="75" height="75" />
          <h2>{name}</h2>
        </header>
        <p>
          <span>Bio: </span>{bio}
        </p>
        <p>
          <span>Seguidores:</span> {followers}
        </p>
        <p>
          <span>Seguindo:</span> {following}
        </p>
        <p>
          <span>Repositórios públicos:</span> {public_repos}
        </p>
        <p>
          <span>Localização:</span> {location}
        </p>
      </div>
    )
  }

}

export default Profile;