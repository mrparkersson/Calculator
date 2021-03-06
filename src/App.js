import React from 'react';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Quote from './Components/Quote';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route path='/calculator' component={Calculator} />
          <Route path='/quotes' component={Quote} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
