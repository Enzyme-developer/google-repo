import React, { useEffect } from 'react'
import  { useLocation } from 'react-router-dom';
import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading';

const All = () => {

    const { results, loading, getResults, searchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if (searchTerm !== '') {
            if (location.pathname === '/videos') {
                getResults(`/search/q=${searchTerm} videos`);
            } else {
                getResults(`${location.pathname}/q=${searchTerm}}&num=50`);
            }
        }
    }, [searchTerm]);

    if (loading) { return <Loading /> };


    return (
        <div className="p-3 sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm dark:text-white">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">{title}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">{description}</p>
              </a>
            </div>
          ))}
        </div>
      );
}
    
export default All