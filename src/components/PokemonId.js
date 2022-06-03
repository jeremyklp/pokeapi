import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import sword from "../images/sword.png"
import health from "../images/health-care.png"
import shield from "../images/health-insurance.png"
import star from "../images/star.png"
import speed from "../images/fast-forward.png"

const PokemonId = () => {
    const {id}=useParams();
    const [pokedeil, setpokedeil]=useState({})


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setpokedeil(res.data))

    },[id])
console.log(pokedeil);

const navigate = useNavigate()

const back=()=> {navigate("/pokedex")}



    return (
        <div id='content-id'>
            <h1 id='namepokeid'>{pokedeil.name}</h1>
           
            
            
            
            
           


            <div id='img-pokeid'>
                <button onClick={back}> back</button>
                <div id='content-icon'>
                    <img alt=''src={health}  className="icon"/>
                    <img alt=''src={sword} className="icon" />
                    <img alt=''src={shield} className="icon" />
                    <div id='doble'>
                        <img alt=''src={star} className="icon" />
                        <img alt=''src={sword} className="icon" />
                    </div>
                    <div id='doble'>
                        <img alt=''src={star} className="icon" />
                        <img alt=''src={shield} className="icon" />
                    </div>
                    <img src={speed} alt='' className="icon" />
                </div>
                 <div>
                    
                     {pokedeil.stats?.map(pokestats => (
                <h3 id='stats' > {pokestats.base_stat}</h3>
                ))}</div>
            
                <img src={pokedeil?.sprites?.other.home.front_default} alt="" />
                <div id='wei'>
                     <h4>weight: {pokedeil.weight / 10}kg</h4>
                    <h4>height: {pokedeil.height / 10}mts</h4>
                    { pokedeil.types?.map( poke => (
                <h4 key={poke.type.name}>type: {poke.type.name}</h4>
            ))}
                </div>

            </div>
            
            
            
            
            
            
            <div id='img-cute'>
                <img  alt=''className='minimg' src={pokedeil.sprites?.back_default}/>
                <img alt=''className='minimg' src={pokedeil.sprites?.front_default}  />
                <img alt=''className='minimg'src={pokedeil.sprites?.back_shiny} />
                <img alt='' className='minimg'src={pokedeil.sprites?.front_shiny}  />
            </div>
        </div>
    );
};

export default PokemonId;