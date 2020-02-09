import React from 'react';
import { Route } from "react-router-dom";
import Nav from './Nav';
import Hook from './Hook';
import LandingPage from './LandingPage';
import CSSTricks from './CSSTricks';

function App() {
  return (
    <main className='App'>
      <nav>
        <Nav />
      </nav>


      <Route exact path='/hook' component={Hook} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/csstricks' component={CSSTricks} />

    </main>
  );
}

export default App;