import React, { useEffect } from 'react'
import  { useLocation } from 'react-router-dom';
import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading';

const Images = () => {


    const { results, loading, getResults, searchTerm } = useResultContext();
    const location = useLocation();
    console.log(results)

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
        <div className=" flex flex-wrap justify-center w-full">
          {results?.map((result, index) => (
            <div key={index} className="flex flex-wrap">
              <img alt={searchTerm} src={result.image.src} className='w-full aspect-auto p-3' />
            </div>
          ))}
        </div>
      );
}
    
export default Images