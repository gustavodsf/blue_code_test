import { GifContextProvider } from './context/GifContext';

import { GifPage } from './pages/GifPage';

import './styles/global.scss';

function App() {
  return (
    <GifContextProvider>
      <GifPage />
    </GifContextProvider>
  );
}

export { App }
