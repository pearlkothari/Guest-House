import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Container.css';


function Container(props) {
    
    const history=useNavigate();
    let link=`/guest/${props.what}`;
    return (
        <div className="main_container" onClick={() => history(link)}>
            {props.what}
        </div>
    )
}

export default Container;
