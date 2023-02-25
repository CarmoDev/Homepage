import { Container, Favorite, FavoriteText } from "./styles";

import {ReactComponent as Chatgpt} from "../../assets/icons/chatgpt.svg";
import {ReactComponent as YoutubeMusic} from "../../assets/icons/music.svg";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";

export default function Favorites() {
  return (
    <Container>
      <Favorite href="http://stackoverflow.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-stack-overflow fa-2xl" />

        <FavoriteText>
          <p>Stack Overflow</p>
          <span>stackoverflow.com/</span>
        </FavoriteText>
      </Favorite>

      <Favorite href="http://chat.openai.com/chat" target="_blank" rel="noreferrer">
        <Chatgpt />

        <FavoriteText>
          <p>Chatgpt</p>
          <span>chat.openai.com</span>
        </FavoriteText>
      </Favorite>

      <Favorite href="https://mail.google.com/mail/" target="_blank" rel="noreferrer">
        <i className="fa-solid fa-envelope fa-2xl" style={{ color: "#4285F4" }} />

        <FavoriteText>
          <p>Gmail</p>
          <span >gmail.com</span>
        </FavoriteText>
      </Favorite>

      <Favorite href="http://music.youtube.com" target="_blank" rel="noreferrer">
        <YoutubeMusic />

        <FavoriteText>
          <p>Youtube Music</p>
          <span>music.youtube</span>
        </FavoriteText>
      </Favorite>

      <Favorite href="http://github.com" target="_blank" rel="noreferrer">
        <i className="fab fa-github fa-2xl" />

        <FavoriteText>
          <p>Github</p>
          <span>github.com</span>
        </FavoriteText>
      </Favorite>

      <Favorite href="http://carmodev.vercel.app" target="_blank" rel="noreferrer">
        <Logo style={{ width: "38px", height: "38px" }} />

        <FavoriteText>
          <p>Portfólio</p>
          <span>carmodev.vercel</span>
        </FavoriteText>
      </Favorite>
    </Container>
  );
}
