import { ReactNode, createContext, useEffect, useState } from 'react';

import { GifService } from '../service/GifService';

interface IGif {
  type: string;
  url: string;
  title: string;
  id: string;
  username: string;
}

interface IPagination {
  total_count: number;
  count: number;
}

interface IResponse {
  gifs: IGif[];
  pagination: IPagination;
}

type GifContextype = {
  gifList: Array<IGif>;
  searchTerm: string,
  gifAmount: number,
  setSearchTerm: (searchTerm: string) => void,
  setGifAmount: (gifAmount: number) => void,
  handlePageChange: (direction: string) => void,
};

type GifContextProviderProps = {
  children: ReactNode;
};

export const GifContext = createContext({} as GifContextype);

export function GifContextProvider(props: GifContextProviderProps) {
  const [gifList, setGifList] = useState(Array<IGif>());
  const [offset, setOffset] =  useState(1);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [searchTerm, setSearchTerm] = useState('');
  const [gifAmount, setGifAmount] = useState(10);

  const getGifList = (term: string, amount: number, offset: number) => {
    const gifService = new GifService();
    gifService.getGif(term, amount, offset).then((result: IResponse) => {
      setGifList(result.gifs);
      setPagination(result.pagination);
    });
  };

  const handlePageChange = (direction: string) => {
    if(direction === 'next') {
      if(offset + gifAmount < pagination.total_count) {
        setOffset(offset + gifAmount);
      }
    } else {
      if(offset - gifAmount > 0) {
        setOffset(offset - gifAmount);
      }
    }
  };

  useEffect(() => {
    getGifList(searchTerm, gifAmount, offset);
  }, [searchTerm, gifAmount, offset]);

  return (
    <GifContext.Provider
      value={{
        gifList,
        searchTerm,
        gifAmount,
        setSearchTerm,
        setGifAmount,
        handlePageChange,
      }}
    >
      {props.children}
    </GifContext.Provider>
  );
}