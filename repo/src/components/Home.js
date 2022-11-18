import React, { useState } from 'react';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const navigate = useNavigate()
    
    const handleOnClick=(event)=>{
        props.setName(event.target.value)
        navigate("/search")
    }
    return ( 
    <div>
        <label >User Name</label>
        <input type="text" required/>
        <button onClick={handleOnClick}>submit</button>
    </div>
    );
}


 
export default Home;
