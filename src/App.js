import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Card from './components/card/card'
import Counter from './components/counter/counter';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
    <div >

    <header className='navbar'>
      
        <div className='navbar__title navbar__item'>My First React App</div>
        <Link to="/">   <div className='navbar__item'>Home</div> </Link>
        <Link to="/profile">   <div className='navbar__item'>Profile</div></Link>
        <Link to="/counter"> <div className='navbar__item'>Counter</div>   </Link>  
    </header>
      <Switch>
      <center>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/profile' component={Card}></Route>
              <Route exact path='/counter' component={Counter}></Route>
     </center>
            </Switch>
    </div>
    </Router>
  );
}

export default App;
