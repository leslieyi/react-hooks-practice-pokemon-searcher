import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((Data) => {
        setPokeData(Data);
      });
  }, []);

  const [searchInput, setSearchInput] = useState("");
  function handleSearch(e) {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  }
  //now I need to filter through this

  const searchFilterActivateNow = pokeData.filter((onePoke) =>
    onePoke.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const [userInput, setUserInput] = useState({
    name: "",
    hp: "",
    sprites: { front: "", back: "" },
  });

  // const [sprites, setSprites] =useState({})
  function handleUserInputChange(e, nested) {
    // console.log(typeof nested === "string");
    let name = e.target.name;
    let value = e.target.value;
    if (typeof nested === "string") {
      setUserInput({
        ...userInput,
        sprites: {
          ...userInput.sprites,

          [name]: value,
        },
      });
    } else {
      setUserInput({
        ...userInput,
        [name]: value,
      });
    }
  }
  //keeping two separate states above.

  function handleFormSubmit(e) {
    e.preventDefault();
    setPokeData(
      [userInput, ...pokeData]
      //new object that consists of user input, adding sprites
    );
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        handleUserInputChange={handleUserInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokeData={searchFilterActivateNow} />
    </Container>
  );
}

export default PokemonPage;
