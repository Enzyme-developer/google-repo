import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading';

const Videos = () => {

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
        <div className="p-3 flex flex-wrap px-4 w-full justify-center">
          {results.map((video, index) => (
            <div key={index} className="p-2">
             {video?.additional_links?.[0]?.href && 
              <ReactPlayer url={video.additional_links?.[0].href} controls width="auto" height="auto" /> }
            </div>
          ))}
        </div>
      );

}
    
export default Videos