import GlobalStyle from '../../styles/global';
import './App.css';

const Core = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App" id="core">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
};

export default Core;
