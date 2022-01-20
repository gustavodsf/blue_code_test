import { useState } from "react";


import '../styles/gif_search.scss';

function GifSearch(){

  const [searchTerm, setSearchTerm] = useState("");
  const [gifAmount, setGifAmount] = useState(10);

  const handleSearchEvent = () => {
    console.log(searchTerm);
    console.log(gifAmount);
  }

  return (
    <div className= "search">
      <label htmlFor="searchTerm">Termo</label>
      <input id="searchTerm" value={searchTerm} onChange={(e: any) => setSearchTerm(e.target.value)}/>


      <label htmlFor="gifAmount">Quantidade</label>
      <select id="gifAmount" value={gifAmount}  onChange={(e: any) => setGifAmount(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">30</option>
      </select>

      <button onClick = { () => handleSearchEvent() }>Buscar</button>

    </div>
  )
}

export { GifSearch };
