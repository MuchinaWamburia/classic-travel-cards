import {React, useEffect,useState}from "react";
// import './style.css'

// take in the data as props and render the cards with that data in a wrapper 
function CardLayout ({location,image,description,info,card}) {
  // const [cardsData, setCardsData] = useState([]);
const [isFavourite,setIsFavourite] =useState([]);

function handleLikeClick () {
  setIsFavourite (isFavourite => !isFavourite) 
}

function handleDelete(event,card) {
  fetch(`http://localhost:8001/cards/${card.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  event.target.parentElement.parentElement.remove ()

}

useEffect(() => {
  fetch(`http://localhost:8001/cards/${card.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify ({faVourite:isFavourite})
  })

},[isFavourite,card.id])

return (
  <div className="cardLayout">
<div class="ui link cards">
  <div class="card">
    <div class="content">
  <div className="image" >
    <span className="price">$0</span>

    <img src={image} alt={description}  title={info}/>
  </div>
  <div className="details">
  {isFavourite ? (
      <button 
        onClick={() => handleLikeClick(card)} >
       <i  className="icon large red heart" title="Liked"/></button>
    ) : (
      <button 
      onClick={() => handleLikeClick(card)}> 
     <i  className="heart outline icon" title="Like" /></button>
    //  <i class="heart outline icon"></i>
  )}

<strong>{description}</strong>
    <span> · {location}</span>
    <span> . { }</span>
    <button onClick={(e) => handleDelete(e, card)}>
      <i className=" icon trash" aria-hidden="true"/>
    </button>
    
  </div>
</div>
</div>
</div>
</div>

);

    }

export default CardLayout;