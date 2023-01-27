import {React} from "react";
import './style.css'

function Search ({searchInput , setSearchInput}) {
  return (
    < form className="searchBar">
      <input type= "text" id="search" placeholder="search your card" value={searchInput} onChange={(event) => setSearchInput (event.target.value)}/>
      <button type="submit">🔍Search</button>
    </form>
  );
}

export default Search;