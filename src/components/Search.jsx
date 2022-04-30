import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../context/ResultContextProvider';
import Links  from './Links';

const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState('Elon Musk');
  const [debouncedValue] = useDebounce(text, 300);

  //debouncing
  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className='justify-center items-center flex flex-col w-full px-2'>
    <div className='justify-center items-center flex flex-row mt-6 mb-0 w-full '>
       <input
        value={text}
        type="text"
        className=" w-4/5 h-8 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-5 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
        />  
        
      {text !== '' && (
        <button type="button" 
        // className="absolute top-1.5 right-4 text-2xl text-gray-500 dark:text-gray-100" 
        className='text-2.5xl text-gray-500 dark:text-gray-100 ml-5'
        onClick={() => setText('')}>
          x
        </button>
      )}
      </div>
      
      <Links />
    </div>
  );
  
};

export default Search;