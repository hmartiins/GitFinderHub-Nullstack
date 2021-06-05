import Nullstack from 'nullstack';
import './Application.scss';
import Profile from './components/Profile/Profile.njs';

class Application extends Nullstack {

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
      <input type="text" />
    );
  }

  renderButton() {
    return(
      <button>Buscar</button>
    );
  }

  render() {
    return (
      <main>
        <Head />
        <header>
          <Input />
          <Button />
        </header>
        {/* <Profile /> */}
      </main>
    )
  }

}

export default Application;