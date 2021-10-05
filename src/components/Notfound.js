import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>This page cannot be found</h2>
            <Link to="/">Back to homepage...</Link>
        </div>
     );
}

export default Notfound;