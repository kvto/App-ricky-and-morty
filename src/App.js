import  {Routes, Route} from 'react-router-dom';
import './App.css';
import Characters from './Components/Characters';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Register/Login/Login';
import Nav from './Components/common/Nav';
import { Container } from 'react-bootstrap';


function App() {
  
  return (
    <Container>
        <Nav/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Characters />} />     
          <Route path="/register" element={<Register />} /> 
        </Routes>
    </Container>
    
    
  );
}

export default App;
