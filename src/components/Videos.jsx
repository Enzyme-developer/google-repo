import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading';

const Videos = () => {

  const { results, loading, getResults, searchTerm } = useResultContext();
  // const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {  
      getResults(`/search/q=${searchTerm} videos`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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