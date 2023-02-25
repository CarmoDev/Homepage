import { SetStateAction, useState } from "react";
import { Container, SearchBtn, SearchInput } from "./styles";

export default function Search() {
  const [search, setSearch] = useState("");

  function handleSearchChange(event: { target: { value: SetStateAction<string>; }; }) {
    setSearch(event.target.value);
  }

  function handleSearchSubmit() {
    window.location.href=`https://www.google.com/search?q=${search}`;
  }

  document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
      event.preventDefault();
      handleSearchSubmit();
    }
  });

  return (
    <Container>
      <SearchInput type="text"  onChange={handleSearchChange} />

      <SearchBtn type="button" onClick={handleSearchSubmit}>
        <i className="fa-solid fa-magnifying-glass fa-xl" />
      </SearchBtn>
    </Container>
  );
}
