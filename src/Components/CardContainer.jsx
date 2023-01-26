import React,{useEffect,useState} from "react";
import CardLayout from "./CardLayout";

function CardContainer() {
  const [cardsData, setCardsData] = useState([]);

  async function fetchData() {
    fetch(`https://rickandmortyapi.com/api/character?page=${Math.floor(Math.random() * 41)}`)
      .then((response) => response.json())
      .then((data) => {
        setCardsData(data.results);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CardLayout data ={cardsData}/>
  );
}


export default CardContainer;
