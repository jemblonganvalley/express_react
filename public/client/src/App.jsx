import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Switch, Route, useParams} from 'react-router-dom'
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Switch>

        <Route path='/test/:slug'> 
          <Test />
        </Route>

        <Route path='/about'> 
          <h1>about</h1>
        </Route>

        <Route path='/'> 
          <h1>hello</h1>
        </Route>

      </Switch>
      
      



    </div>
  );
}

export default App;
