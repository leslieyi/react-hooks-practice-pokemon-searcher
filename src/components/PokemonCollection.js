import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeData}) {


  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {pokeData.map(onePoke => 
        <PokemonCard key={onePoke.id} onePoke={onePoke}/> 
        )}

    </Card.Group>
  );
}

export default PokemonCollection;
