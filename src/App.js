import './App.css';
import RickMortyContainer from './containers/RMContainer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DetailsContainer from './containers/DetailsContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <RickMortyContainer {...routerProps}/>}
          />
          <Route 
            path="/details/:id" 
            exact
            render={(routerProps) => <DetailsContainer {...routerProps}/>}

          />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
