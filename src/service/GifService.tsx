import { api } from './api';

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

class GifService {

  async getGif(term: string, amount: number, offset: number ): Promise<IResponse> {

    const url = this.mountUrl(term, amount, offset);    
    const response  = await api.get(url);
    const gifs = Array<IGif>();
    
    const newLocal : any = response.data;
    newLocal.data.forEach((gif: any): void => {
        gifs.push({
            type: gif.type,
            url: gif.images.original.url,
            title: gif.title,
            id: gif.id,
            username: gif.username
        })
    });
    return { gifs, pagination: newLocal.pagination };
  }


  mountUrl(term: string, amount: number, offset: number): string  {
    // TODO - create a env file for that
    const key = 'hkaGTiiVm5J2Pq62ehav8jD0KXqm46b1';
    let url = 'gifs/';
    if(term === '' || term === undefined || term === null) {
      url += `trending?api_key=${key}&limit=${amount}&offset=${offset}&rating=G&lang=en`;
    } else {
      url += `search?api_key=${key}&q=${term}&limit=${amount}&offset=${offset}&rating=g&lang=en`;
    }
    return url;
  }
}

export { GifService };