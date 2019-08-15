import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Card, Image } from 'semantic-ui-react'
import "./PhotoCard.scss"

const PhotoCard = props => {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  return (
<div className="main-div">
<Card>
    <Image src={props.imgUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.imgTitle}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.imgDate}</span>
      </Card.Meta>
      <Card.Description>
      {props.imgExp}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
 
    </Card.Content>
  </Card>
  </div>
    
    // <div className="photo-card " key={props.id}>
    //   <img className="planet-image" alt="planet pic" src={props.imgUrl} />
    //   <h1>{props.imgTitle}</h1>
    //   <h3>{props.imgDate}</h3>
    //   <p>{props.imgExp}</p>
    //   {/* <h2>{props.breed}</h2>
    //   <button>Adopt me!</button> */}
    // </div>
  );
};
export default PhotoCard;