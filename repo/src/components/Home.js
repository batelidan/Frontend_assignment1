import React from 'react';
import Search from './Search';

const handleclick=()=>{
    <Search/>
}
const Home = () => {
    return ( 
    <div><input type="text" id="name" required/>
    <button onClick={handleclick}></button></div>
    );
}
 
export default Home;