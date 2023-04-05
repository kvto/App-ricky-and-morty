import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Character from './Character';
import Loading from '../common/Loading';
import Paginate from '../common/Paginate';
/* Costum hook */
import { useFetch } from '../../CustomHooks/useFetch';
import Search from '../../Search/Search';

const BASE_ENDPOINT = 'character'
const Characters = () => {
    
  const [search, setSearch] = useState("");
    const [url, setUrl] = useState(BASE_ENDPOINT);

    useEffect(() => {
        const newUrl = !search ? BASE_ENDPOINT : `${BASE_ENDPOINT}?name=${search}`
        setUrl(newUrl);
    }, [search])

    const [data, fetching] = useFetch(url)
    const {info, results : characters} = data; // renombramos results en characters
    
    const handlePages = (newUrl) => {
        
        setUrl(`${BASE_ENDPOINT}?${newUrl}`);
    }

    const handlerSearch = (name) => {
        setSearch(name);
      }

    return ( 
        <>
        <Row>
        <Search handlerSearch={handlerSearch}/>
            {
                fetching
                ? ( <Loading />)
                : (characters.map((character) =>(
                <Character key={character.id} {...character}/>)      
                ))
            }
          
        </Row>     
            <Paginate {...info} handlePages={handlePages}/>  
        </>
     );
}
 
export default Characters;