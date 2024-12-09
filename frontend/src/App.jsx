// import logo from './logo.svg';
import './stylesheet/App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CreatePage from './pages/CreatePage';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/createRecipe" element={<CreatePage />}></Route>
      </Routes>
    </div>
  );
}

/* Default app codes
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />

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
*/

export default App;
