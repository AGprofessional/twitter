import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <div class="container">
        <div class="row">
         <div class="col-sm-">
            <div class="colNav">

              <Link to="/">Home</Link>
    
               <Link to="/explore">Explore</Link>
              <Link to="/notifications">Notifications</Link>

              <Link to="/messages">Messages</Link>
               <Link to="/bookmarks">Bookmarks</Link>

              <Link to="/lists">Lists</Link>
    
             </div>
          </div>
          <div class="col-xxl-">
            Column
           </div>
         </div>
      </div>
     
        

        <Switch>
          <Route path="/explore">
            <Explore />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function Explore() {
  return <h2>Explore</h2>;
}

export default App;
