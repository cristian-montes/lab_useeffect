import './App.css';
import RickMortyContainer from './containers/RMContainer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RickMortyContainer/>}/>
          {/* <Route path="/details/:id" element={} /> */}
       </Routes>
      </Router>
    </div>
  );
}

export default App;
