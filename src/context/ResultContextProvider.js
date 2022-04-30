import React , { useContext , useState , createContext } from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ( {children }) => {
    const [results , setResults ] = useState([]);
    const [loading , setLoading ] = useState(false);
    const [searchTerm , setSearchTerm ] = useState('Elon Musk');

    const getResults = async (type) => {
        setLoading(true)

        const response = await fetch(`${baseUrl}${type}` , {
            method : 'GET' , 
            headers : {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'e4a857be5cmsh09ebc54b46beaa4p127d24jsnd3c58aaa2a16'
            }
        });

        const data = await response.json();

        if(type.includes('/news')){
            setResults(data.entries);
        } else {
            setResults(data.results);
        }

        console.log( {type, data} )

        setLoading(false);

    }
    return (
        <ResultContext.Provider value={ { getResults , results , searchTerm , setSearchTerm , loading } }>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)