import React , { useContext , useState , createContext } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ( {children }) => {
const [results , setResults ] = useState([]);
const [loading , setLoading ] = useState(false);
const [searchTerm , setSearchTerm ] = useState('Elon Musk');

const getResults = async (type) => {
    setLoading(true)
    const options = {
        method: 'GET',
        headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'US',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
    };
        
    const response = await fetch(`${baseUrl}${type}`, options)
    const data = await response.json();
    //make the function work for all cases by checking the type

    if (type.includes('/news')) {
        setResults(data.entries)
    } else if (type.includes('/image')) {
        setResults(data.image_results)
    } else {
        setResults(data.results)
    } 

    setLoading(false);

}
    
return (
    <ResultContext.Provider value= { { getResults , results , searchTerm , setSearchTerm , loading } } >
        {children}
    </ResultContext.Provider>
)
}

export const useResultContext = () => useContext(ResultContext)