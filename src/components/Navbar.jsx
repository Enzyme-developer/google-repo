import React from "react";
import { Link } from 'react-router-dom';
import Search from './Search'

//get props passed
const Navbar = ( { darkTheme , setDarkTheme } ) => {
return (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
    <div className=" flex justify-between items-center space-x-5 w-screen">
      <Link to='/'>
        <p className="text-1.5xl dark:text-white bg-blue-600 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 ">Finder 🔍</p>
      </Link>
      
      <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-l dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-1 border hover:shadow-lg focus:outline-none outline-none' >
        {darkTheme ? 'Light 💡' : 'Dark 🌙'}
      </button>
    </div>
    <Search />
  </div>
  )
}
export default Navbar