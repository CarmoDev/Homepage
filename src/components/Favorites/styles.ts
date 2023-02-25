import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4px
`;

export const Favorite = styled.a`
  display: flex;
  align-items: center;
  color: white;
  background-color: #45454E;
  height: 80px;
  gap: 8px;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all .4s;

  :hover {
    background-color: #54545e;
    transform: scale(1.03);
    box-shadow: 0 0 10px 0px #24242b;
  }
`;

export const FavoriteText = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-weight: 600;
  }

  a {
    font-size: 12px;
    color: #ccc;
    text-decoration: none;
  }
`;
