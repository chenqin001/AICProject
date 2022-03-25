import './App.css';
import Upload from './components/Upload.js';
import Download from './components/Download';
import Settings from './components/Settings';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          <ul>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/download">Download</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/Upload" />}/>
          <Route exact path='/upload' element={<Upload/>} />
          <Route path='/download' element={<Download/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
