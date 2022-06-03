import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeuser } from '../store/slices/User.slice';
import { useDispatch } from 'react-redux';
import charizard from "../images/charizard.gif"

const Userlogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    
    
    const[username, setusername]=useState("")
    
    
    const getname= ()=> {
        console.log(username);
        dispatch(changeuser(username))
    navigate("/pokedex")
    }
    
    return (
        <div className='userlog'>
           <div id='h11'><h1>Bienvenido entrenador pokemon </h1></div>
           <div id='h12'><input placeholder='Nombre de entrenador' type="texr" value={username} onChange={e => setusername(e.target.value)}/>
            <button onClick={getname}>Comienza!</button></div> 
            
        </div>
    );
};

export default Userlogin;