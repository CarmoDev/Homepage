import { Container, Header, Title, Social } from "./styles";

import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import Search from "../../components/Search";
import Favorites from "../../components/Favorites";

function App() {
  return (
    <Container>
      <Header>
        <Logo />
        <Title data-text="CARMO.DEV">CARMO.DEV</Title>

        <Social>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram fa-xl instagram"></i>
          </a>

          <a href="https://www.youtube.com/">
            <i className="fab fa-youtube fa-xl youtube"></i>
          </a>

          <a href="https://github.com/CarmoDev">
            <i className="fab fa-github fa-xl github"></i>
          </a>

          <a href="https://www.linkedin.com/feed/">
            <i className="fab fa-linkedin fa-xl linkedin"></i>
          </a>
        </Social>
      </Header>

      <Search />

      <Favorites />
    </Container>
  );
}

export default App;
