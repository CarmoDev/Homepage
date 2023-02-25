import styled,{keyframes} from "styled-components";

export const drawSvg = keyframes`
  0% {
    stroke-dashoffset: 554; // tamanho inicial
  }
  100% {
    stroke-dashoffset: 0; // tamanho final
  }
`;

export const Container = styled.main`
  width: 600px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
  height: 40svh;
  gap: 24px;

  background: rgba(42, 42, 42, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(42, 42, 42, 0.3);

  svg path {
    stroke: #0094F3;
    stroke-width: 10;
    stroke-dasharray: 554;
    animation: ${drawSvg} 2.5s infinite alternate;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  font-family: 'Fira Code', monospace;
  font-size: 36px;
  letter-spacing: 2px;
  font-weight: 500;
  text-shadow: 0 0 1px #0094F3,
               0 0 5px #0094F3,
               0 0 10px #0094F3,
               0 0 20px #0094f3,
               0 0 40px #0094F3;
`;

export const Social = styled.nav`
  display: flex;
  gap: 16px;

  i {
    padding: 20px 10px;
    background-color: #fafafa;
    border-radius: 50%;
    cursor: pointer;
    transition: all .4s ease-in-out;

    :focus, :hover {
      color: #fafafa;
      transform: scale(1.09);
    }
  }

  .instagram {
    color: #E4405F;

    :hover {
      background-color: #E4405F;
    }
  }

  .youtube {
    color: #f00;
    padding: 20px 8px;

    :hover, :focus {
      background-color: rgba(255, 0, 0, 0.8);
    }
  }

  .github {
    color: #202124;

    :hover, :focus {
      background-color: #202124;
    }
  }

  .linkedin {
    color: #0077B5;

    :hover, :focus {
      background-color: #0077B5;
    }
  }
`;
