import { useContext } from 'react';
import { GifContext } from '../context/GifContext';

interface IGif {
  url: string;
  title: string;
  id: string;
}

function GifShower(){
  const { gifList } = useContext(GifContext);

  return (
    <>
      {
        gifList.map((gif: IGif) => {
          return (
            <div key={gif.id}>
              <img src={gif.url} alt={gif.title} />
            </div>
          );
        })
      }
    </>
  );
}

export { GifShower };