import Header from './components/Header'
import MainCard from './components/MainCard';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home';
import Button from './components/Button';

function App() {

  return (
    <Router>
    <div className="app">
        <Header />
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <Home />
                      <Link to="/main">
                        <Button text="NEXT"/>
                        </Link>
                </Route>
                <Route path="/main">
                    <MainCard />
                      <Link to="/">
                        <Button text="BACK"/>
                      </Link>
                </Route>
            </Switch>
        </div>
    </div>
</Router>
  );
}

export default App;

