import logo from './logo.svg';
import './App.css';
import '../src/styles/test.css'

import { CommentPage as Application } from './pages/sample/CommentPage';
import LibrayPage from './pages/sample/LibrayPage';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <center><span className="accent">섭섭이와 함께하는 즐거운 React</span></center>
      <Application />
    </div>
  );
}

export default App;
