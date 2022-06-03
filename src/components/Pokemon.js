import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pokemon = ({urlapi}) => {
    const[character, setcharacter]=useState()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(urlapi)
        .then(res => setcharacter(res.data))

    },[])
   
   
    
    return (
        <div className='cardd' onClick={()=>navigate(`/pokemon/${character.id}`)}>
            <h3 id='namepoke'>{character?.name}</h3>
            <img src={character?.sprites.other.home.front_default} alt="" />
        </div>
    );
};

export default Pokemon;