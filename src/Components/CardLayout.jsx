import {React, useEffect,useState}from "react";
import './style.css'

// take in the data as props and render the cards with that data in a wrapper 
function CardLayout ({location,image,description,card}) {
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
  <li className="card">
  <div className="image">
    <span className="price">$0</span>

    <img src={image} alt={description} />
  </div>
  <div className="details">
  {isFavourite ? (
      <button 
        onClick={() => handleLikeClick(card)} 
        className="emoji-button favorite active">★</button>
    ) : (
      <button 
      onClick={() => handleLikeClick(card)} 
      className="emoji-button favorite"></button>
  )}

<strong>{description}</strong>
    <span> · {location}</span>
    <button onClick={(e) => handleDelete(e, card)} className="emoji-button delete">🗑</button>
  </div>
</li>
);

    }

export default CardLayout;