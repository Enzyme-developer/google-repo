import React, { useEffect } from 'react'
import  { useLocation } from 'react-router-dom';
import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loading';

const News = () => {

const { results, loading, getResults, searchTerm } = useResultContext();
const location = useLocation();
console.log(results)

useEffect(() => {
if (searchTerm !== '') {
    getResults(`${location.pathname}/q=${searchTerm}}&num=50`);
}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchTerm]);

if (loading) { return <Loading /> };


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
)
}
    
export default News