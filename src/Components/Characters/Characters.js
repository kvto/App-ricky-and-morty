import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Character from './Character';
import Loading from '../Loading';
import Paginate from '../Paginate';
/* Costum hook */
import { useFetch } from '../../CustomHooks/useFetch';

const BASE_ENDPOINT = 'character'
const Characters = ({search }) => {
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

    
    return ( 
        <>
        <Row>
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