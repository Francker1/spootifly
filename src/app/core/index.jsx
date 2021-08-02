import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../styles/global';

import { MusicContext } from './helpers/AppContext';
import reducer, { initialState } from './domain/reducers/reducer';

import AppRouter from './routes/AppRouter';

const Core = () => {
  return (
    <div id="core">
      <GlobalStyle />
      <MusicContext initialState={initialState} reducer={reducer}>
        <AppRouter />
      </MusicContext>
    </div>
  );
};

export default Core;
