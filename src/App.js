import React from 'react';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { Routes ,Route} from 'react-router-dom';
import  { useLocation, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import All from './components/All'
import News from './components/News'
import Videos from './components/Videos'
// import Images from './components/Images'

function App() {
//state for Theme
const [darkTheme, setDarkTheme] = useState(false);
const location = useLocation();
const navigate = useNavigate();

//redirect if pathname is '/' : dependency location
useEffect(() => {
if (location.pathname === '/') {
navigate('/search');
}
}, [location]);

  
return (
  <div className={darkTheme ? 'dark' : ''}>
  <div className='bg-gray-100 dark:bg-gray-900 dark:text-grey-200 min-h-screen'>
    {/* pass state into navbar component */}
    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      
    <Routes>
      <Route path={'/search'} element={<All/>} />
      <Route path={'/news'} element={<News />} />
      <Route path={'/videos'} element={<Videos />} />  
    </Routes>
 
    <Footer />
  </div>
</div>
  )

}
export default App;