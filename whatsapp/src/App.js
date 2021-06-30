import Chat  from './Chat';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="app">

        <div className="app__body">
        <Router>
          <Switch>
          <Route path="/App">
        <Sidebar/>
        <Chat/>
            </Route>
            <Route path="/">
              
            </Route>
          </Switch>
        </Router>
        
        
      </div>


    

    </div>
  );
}

export default App;
