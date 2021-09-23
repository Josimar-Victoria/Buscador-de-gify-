import '../Styles/App.css';
import { Link, Route, Switch } from 'wouter'
import { Home } from "../Pages/Home";
import { Detail } from "../Pages/Detail";
import { SearchResults } from "../Pages/SearchResults";
import { Context } from '../Components/Context/Context';
import { GifsContextProvider } from '../Components/Context/GifsContext';
import ErrorPage from 'Pages/ErrorPage';
function App() {

  return (
    <Context.Provider value='hola mundo'>
      <div className="App">
        <section className="App-content">
          <Link to="/">
          <h1>Giphy App</h1>
          </Link> 
            <GifsContextProvider>
            <Switch>
              <Route path="/" component={Home}/>
              <Route path="/search/:keyword" component={SearchResults} />
              <Route path="/search/gif/:id" component={Detail} />
              <Route component={ErrorPage} path="/:rest*" />
            </Switch>
            </GifsContextProvider>
        </section> 
      </div>
    </Context.Provider>
  );
}

export default App;
