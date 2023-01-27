import React from "react";
import './style.css'
import Search from "./Search";

function Header ({searchInput,setSearchInput}){
  return (
    <header>
      <h1>
        CLASSIC CARDS
      </h1>
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
    </header>
  );
}

export default Header;