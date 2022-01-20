import { useState } from "react";
import { useContext } from 'react';
import { GifContext } from '../context/GifContext';

import '../styles/gif_search.scss';

function GifSearch(){

  const { setGifAmount, setSearchTerm } = useContext(GifContext);

  const [term, setTerm] = useState("");
  const [amount, setAmount] = useState(10);

  const handleSearchEvent = () => {
    setGifAmount(amount);
    setSearchTerm(term);
  }


  return (
    <div className= "search">
      <div className="forTerm">
        <label htmlFor="searchTerm">Term</label>
        <input name="searchTerm" value={term} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)} />
      </div>

      <div className="forAmount">
        <label htmlFor="gifAmount">Amount</label>
        <select id="gifAmount" value={amount}  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAmount(parseInt(e.target.value, 10))}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
        </select>
      </div>
      <div className="searchButton">
        <button onClick = { () => handleSearchEvent() }>Buscar</button>
      </div>

    </div>
  )
}

export { GifSearch };
