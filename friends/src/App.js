import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import FriendsList from './components/FriendsList'
import VIProute from './components/PrivateRoute'
import Login from './components/Login'
import { FriendsProvider } from './components/utils/context';

function App() {
  return (
    <FriendsProvider>
    <Router>
    <div className="App">
      <header className="App-header">
        <Link to='/login'>Login Portal</Link>
      
        <Link to='/'>Home</Link>
      </header>
      <Route path='/login' component={Login}/>
      <Switch>
      <VIProute exact path='/friends' >
        <FriendsList/>
      </VIProute>
      </Switch>
    </div>
    </Router>
    </FriendsProvider>
  );
}

export default App;
