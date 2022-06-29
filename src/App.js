import React from 'react';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Routes ,Route , Navigate} from 'react-router-dom';
import Footer from './components/Footer';
import All from './components/All'
import News from './components/News'
import Videos from './components/Videos'
import Images from './components/Images'

function App() {
  //state for Theme
  const [darkTheme, setDarkTheme] = useState(false);
  
return (
  <div className={darkTheme ? 'dark' : ''}>
  <div className='bg-gray-100 dark:bg-gray-900 dark:text-grey-200 min-h-screen'>
    {/* pass state into navbar component */}
    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    <Routes>
      {/* <Route path='/'>
      <Navigate to="/search" replace={true} />
      </Route>     */}
      <Route path={'/search'} element={<All/>} />
      <Route path={'/news'} element={<News />} />
      <Route path={'/videos'} element={<Videos />} />
      <Route path={'/image'} element={<Images />} />
      
    </Routes>
    <h1 className='text-center p-4'>Click any of the Above options</h1>
    <Footer />
  </div>
</div>
  )
}

export default App;