import * as React from 'react';
import { Link } from "react-router-dom";

function Home(){

    return (
        <div className="row" style={{marginLeft: '40%'}}>
            <Link to="/todo">
                <button type="button" className="btn btn-primary mr-2 mt-3">Go To TODO App</button>
            </Link>
            <Link to="/user-list">
                <button type="button" className="btn btn-primary mt-3">Go To User List</button>
            </Link>

        </div>
    )
}

export default <Home/>