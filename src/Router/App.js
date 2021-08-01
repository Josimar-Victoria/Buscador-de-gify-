import '../Styles/App.css';
import { Link, Route } from 'wouter'
import { Home } from "../Pages/Home";
import { Detail } from "../Pages/Detail";
import { SearchResults } from "../Pages/SearchResults";
import { Context } from '../Components/Context/Context';
import { GifsContextProvider } from '../Components/Context/GifsContext';
function App() {

  return (
    <Context.Provider >
      <div className="App">
        <section className="App-content">
          <Link to="/">
          <h1>Giphy App</h1>
          </Link> 
            <GifsContextProvider>
              <Route path="/" component={Home}/>
              <Route path="/search/:keyword" component={SearchResults} />
              <Route path="/gif/:id" component={Detail} />
            </GifsContextProvider>
        </section> 
      </div>
    </Context.Provider>
  );
}

export default App;
