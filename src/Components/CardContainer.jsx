import React,{useEffect,useState} from "react";
// import "./style.css"
import CardList from "./CardList";
import Header from "./Header";

function CardContainer( ){
  // const [cardsData, setCardsData] = useState([]);
    // must set these states up here in App because two different child 
  // components need access to them
  const [cards,setCards] =useState ([])
  const [searchInput ,setSearchInput]=useState( "")

  useEffect (() => {
    fetch("http://localhost:8001/cards")
    .then(res => res.json())
    .then (cardsdata => setCards (cardsdata))
  },[])

  const searchResults =cards.filter ((card) => {
    if (searchInput === "") return true

    return card.description.toLowerCase ().includes 
     (searchInput.toLowerCase ())
  })

  return (
    <div className="cardContainer">
            <Header 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} />
      < CardList
        searchResults={searchResults} />
    </div>
  );
}
export default CardContainer;
