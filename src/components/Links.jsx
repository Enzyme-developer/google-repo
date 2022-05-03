import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎All', id : '1' },
  { url: '/news', text: '📰News', id : '2'  },
  { url: '/videos', text: '📺Videos' , id : '3'  },
];

const Links = () => (
  <div className="flex sm:justify-between  justify-center items-center mt-3 w-full">
    {links.map(({ url, text ,id}) => (
        <NavLink to={url} key={id} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 px-1" 
          className='px-3 mb-0 dark:text-gray-100'>
          {text}
        </NavLink>
    ))}
  </div>
);

export default Links;