import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
    <>
    <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Registro</Link>
    </div>
    </> 
    );
}
 
export default Nav;