import { useContext } from 'react';
import { GifContext } from '../context/GifContext';

import '../styles/gif_footer.scss';

function GifFooter(){

  const { handlePageChange } = useContext(GifContext);

  return (
    <div className="gif-footer">
      <button onClick={()=> handlePageChange("before")}> Before </button>
      <button onClick={()=> handlePageChange("next")}> Next </button>
    </div>
  )
}

export { GifFooter }