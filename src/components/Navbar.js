import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>React Exam</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;