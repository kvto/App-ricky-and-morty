import {useEffect, useState} from 'react'
import { Row } from 'react-bootstrap';
import Character from './Character';
import Loading from '../Loading';
/* Costum hook */
import { useFetch } from '../../CustomHooks/useFetch';
const BASE_URL = "https://rickandmortyapi.com/api";
const Characters = () => {
    const [data, fetching, error] = useFetch('character')
    const {info, results : characters} = data; // renombramos results en characters
    return ( 
        <Row>
            {
                fetching
                ? ( <Loading />)
                : (characters.map((character) =>(
                <Character key={character.id} {...character}/>)      
                ))
            }
          
        </Row>        
     );
}
 
export default Characters;