import { GifShower} from '../components/GifShower';
import { GifSearch } from '../components/GifSearch';
import { GifFooter } from '../components/GifFooter';

function GifPage(){
  return(
    <>
      
      <header>
        <GifSearch />
      </header>
      <main>
        <GifShower />
      </main>
      <footer>
        <GifFooter />
      </footer>
    
    </>
  )
}

export { GifPage }