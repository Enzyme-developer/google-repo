import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './components/Routes';
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
           <Results />
        </Route>
        <Route path={'/news'} >
           <Results />
        </Route>
        <Route path={'/videos'} >
           <Results />
        </Route>
      </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;