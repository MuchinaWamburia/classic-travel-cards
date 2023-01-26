import React from "react";

function CardList ( props) {

  return (
    <div className="cardlist">
      <img src={props.imgUrl} alt={props.title} title={props.title} />
       <div className='card-title-container'>
       <span className='card-title'>{props.title.toUpperCase()}</span>
    </div>
    </div>
  )
}

export default CardList;