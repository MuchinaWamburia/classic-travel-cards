import React from "react";
import "./style.css"
import CardLayout from "./CardLayout"

//   props) {

//   return (
//     <div className="cardlist">
//       <img src={props.imgUrl} alt={props.title} title={props.title} />
//        <div className='card-title-container'>
//        <span className='card-title'>{props.title.toUpperCase()}</span>
//     </div>
//     </div>
//   )
// }
function CardList ( {searchResults}){

  const cardList =searchResults.map (card => {
    return < CardLayout  description={card.description} 
    image={card.image} 
    location={card.location}
    card={card} 
    key={card.id}/>
  })
   return (
  <div className="cardlayout">
      {cardList}
  </div>
 )
}

export default CardList;