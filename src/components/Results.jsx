import React , { useEffect } from 'react';
import  { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading';

const Results = () => {

  const { results , loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}}&num=50`);
      }
    }
  }, [searchTerm, location.pathname]);


  if(loading){return <Loading />};

  switch (location.pathname) {
      case '/search':
        return (
          <div className="p-3 sm:px-56 flex flex-wrap justify-between space-y-6">
            {results?.map(({ link, title }, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm dark:text-white">{link.length > 30 ? link.substring(0, 30) : link}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                </a>
              </div>
            ))}
          </div>
        );

        case '/news':
          return (
            <div className="p-3 sm:px-56 flex flex-wrap justify-between items-center space-y-6">
              {results?.map(({ id, links, source, title }) => (
                <div key={id} className="md:w-2/5 w-full ">
                  <a href={links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                    <p className="text-lg dark:text-white text-blue-700">{title}</p>
                  </a>
                  <div className="flex gap-4">
                    <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline text-gray-100 hover:text-blue-300"> {source?.href}</a>
                  </div>
                </div>
              ))}
            </div>
          );


        
      case '/videos':
        return (
          <div className="p-3 flex flex-wrap px-4 w-full justify-center">
            {results.map((video, index) => (
              <div key={index} className="p-2">
               {video?.additional_links?.[0]?.href && 
                <ReactPlayer url={video.additional_links?.[0].href} controls width="auto" height="auto" /> }
              </div>
            ))}
          </div>
        );

      default:
        return 'Error...';
    }
}

export default Results