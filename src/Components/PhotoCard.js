import React from "react";


const PhotoCard = props => {
  // NOTE: The value given to setState() must be of the same type as your vale is expected to be
  return (
    <div className="photo-card " key={props.id}>
      <img className="planet-image" alt="planet pic" src={props.imgUrl} />
      <h1>{props.imgTitle}</h1>
      <h3>{props.imgDate}</h3>
      <p>{props.imgExp}</p>
      {/* <h2>{props.breed}</h2>
      <button>Adopt me!</button> */}
    </div>
  );
};
export default PhotoCard;