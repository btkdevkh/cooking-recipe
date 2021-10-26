import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/css/App.css';

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/recipes/:id" component={Recipe} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
