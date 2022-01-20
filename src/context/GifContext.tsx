import { ReactNode, createContext, useEffect, useState } from 'react';

import { GifService } from '../service/GifService';

interface IGif {
  type: string;
  url: string;
  title: string;
  id: string;
  username: string;
}

type GifContextype = {
  gifList: Array<IGif>;
};

type GifContextProviderProps = {
  children: ReactNode;
};

export const GifContext = createContext({} as GifContextype);

export function GifContextProvider(props: GifContextProviderProps) {
  const [gifList, setGifList] = useState(Array<IGif>());

  const getGifList = () => {
    const gifService = new GifService();
    gifService.getTrending().then((result) => {
      setGifList(result);
    });
  };

  useEffect(() => {
    getGifList();
  }, []);

  return (
    <GifContext.Provider
      value={{
        gifList,
      }}
    >
      {props.children}
    </GifContext.Provider>
  );
}