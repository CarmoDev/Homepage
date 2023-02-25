import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  gap: 4px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  outline: transparent;
  border: 0;
  font-size: 16px;
  background-color: #45454E;
  color: #fafafa;
  caret-color: #fafafa;
  width: 80%;


  -webkit-border-top-right-radius: 8px;
  -webkit-border-bottom-left-radius: 8px;
  -moz-border-radius-topright: 8px;
  -moz-border-radius-bottomleft: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const SearchBtn = styled.button`
  height: 100%;
  padding: 12px 12px;
  border-radius: 4px;
  outline: transparent;
  border: none;
  background-color: #45454E;
  color: #fafafa;

  :hover {
    cursor: pointer;
    background-color: #54545e;
  }
`;
