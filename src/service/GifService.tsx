import { api } from './api';

interface IGif {
  type: string;
  url: string;
  title: string;
  id: string;
  username: string;
}

class GifService {

  async getTrending(): Promise<IGif[]> {
    const response  = await api.get(`gifs/trending?api_key=hkaGTiiVm5J2Pq62ehav8jD0KXqm46b1&limit=20&offset=1&rating=G&lang=en`);
    const gifs = Array<IGif>();

    response.data.data.forEach((gif: any) => {
        gifs.push({
            type: gif.type,
            url: gif.images.original.url,
            title: gif.title,
            id: gif.id,
            username: gif.username
        })
    });
    return gifs;
  }


}

export { GifService };