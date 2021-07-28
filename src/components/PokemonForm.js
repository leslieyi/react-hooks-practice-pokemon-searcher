import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleUserInputChange, handleFormSubmit}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid 
          label="Name" 
          placeholder="Name" 
          name="name" 
          onChange={handleUserInputChange}
          />
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          onChange={handleUserInputChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={(e)=>handleUserInputChange(e, "sprites")}

          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={(e)=>handleUserInputChange(e, "sprites")}

          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
