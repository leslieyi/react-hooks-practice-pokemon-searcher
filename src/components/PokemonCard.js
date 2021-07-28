import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({onePoke: {name, hp, sprites:{front, back}}}) {
  const [isClicked, setIsClicked] = useState(false)
  function toggleCard(){
    setIsClicked(!isClicked)
    
  }

  return (
    <Card>
      <div>
        <div onClick={toggleCard} className="image">
          <img alt="oh no!" src={!isClicked ? front : back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
