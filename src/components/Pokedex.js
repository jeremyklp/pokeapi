import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pokemon from './Pokemon';
import pokebola from "../images/pokebola.png"

const Pokedex = () => {
    
    const user = useSelector(state=> state.user)
    const [characters, setcharacters]=useState ([])
    const [textin, settextin]=useState("")
    const [types, settypes]=useState([])
    
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=11")
        .then(res =>setcharacters(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type")
        .then(res => settypes(res.data.results))
            


    },[])
    
 const navigate = useNavigate()


    const search = ()=> {
        navigate(`/pokemon/${textin}`)
        console.log(textin);}
   
        const filterpoke = e =>{
            axios.get(e.target.value)
            .then(res => setcharacters(res.data.pokemon))
        }
        


    return (
        <div id='contenedor-pokedex'>
           <div id='h111'><h1>Aquí inicia tú aventura {user}    
           </h1><img  id='pokebol' src={pokebola} alt="" /></div>
            
            <div id='search'>
            <select  onChange={filterpoke}>
               { types.map(type => (
                   <option value={type.url}>{type.name}</option>
               ))}
            </select>
            <input 
            type="text" 
            value={textin} 
            onChange={e => settextin(e.target.value)}
            placeholder="Search pokemon"
            />
            <button onClick={search}>search</button>
            

            </div>
           

           <div id='fff'>
           {characters.map(character => (
                    <Pokemon  
                    urlapi={character.url !== undefined?  character.url:character.pokemon?.url} 
                    key={character.url !== undefined?  character.url:character.pokemon?.url} />
                ))
            }
           </div>
           
            
                
            
            
            
        </div>
    );
};

export default Pokedex;