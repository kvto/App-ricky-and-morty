import { useState } from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import Characters from './Components/Characters';
import Search from './Search/Search';

function App() {

  const [search, setSearch] = useState("");

  const handlerSearch = (name) => {
    setSearch(name);
  }
  return (
    <Container>
      <Search handlerSearch={handlerSearch}/>
      <Characters search={search}/>
    </Container>
  );
}

export default App;
