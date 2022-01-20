import { useContext, useState } from 'react';
import { GifContext } from '../context/GifContext';
import { GifModal } from '../components/GifModal';

import '../styles/gif_shower.scss';

interface IGif {
  url: string;
  title: string;
  id: string;
}

function GifShower(){
  const { gifList } = useContext(GifContext);
  const [currentGifId, setCurrentGifId] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='gifContainer'>
        {
          gifList.map((gif: IGif) => {
            return (
              <div key={gif.id} className='gif' onClick={()=> { setCurrentGifId(gif.id), setShowModal(true) }}>
                <img src={gif.url} alt={gif.title} />
              </div>
            );
          })
        }
      </div>
      <GifModal gif_id={currentGifId} show={showModal}  setShowModal={setShowModal}/>
    </>
  );
}

export { GifShower };