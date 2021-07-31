import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../styles/global';

import AppRouter from './routes/AppRouter';

const Core = () => {
  return (
    <div id="core">
      <GlobalStyle />
      <AppRouter />
    </div>
  );
};

export default Core;
