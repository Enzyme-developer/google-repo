import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';
import Videos from './components/Videos';
import All from './components/All';
import { useState } from 'react';
import { Switch ,Route , Redirect} from 'react-router-dom';
import Results from './components/Results';

function App() {
  const [darkTheme , setDarkTheme ] = useState(false);
    return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-grey-200 min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Switch>
        <Route exact path='/'>
          <Redirect to='/search' />
        </Route>
        <Route path={'/search'} >
           <All />
        </Route>
        <Route path={'/news'} >
           <News />
        </Route>
        <Route path={'/videos'} >
           <Videos />
        </Route>
      </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;