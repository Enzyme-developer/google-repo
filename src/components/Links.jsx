import React from 'react';
import { Link } from "react-router-dom";

//create array for links
const links = [
  { url: '/search', text: '🔎All', id : '1' },
  { url: '/news', text: '📰News', id: '2' },
  { url: '/image', text: '📷Images' , id : '3'  },
  { url: '/videos', text: '📺Videos' , id : '4'  }
];

//map through data and display links
const Links = () => (
  <div className="flex sm:justify-between  justify-center items-center mt-3 w-full">

    {links.map(({ url, text ,id}) => (
      <Link to={url} key={id} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 px-1" 
        className='px-3 mb-0 dark:text-gray-100'>
        {text}
      </Link>
    ))}

  </div>
);

export default Links;