import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const PokemonId = () => {
    const { id } = useParams();
    const [pokedeil, setpokedeil] = useState({})


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setpokedeil(res.data))

    }, [id])
    console.log(pokedeil);

    const navigate = useNavigate()

    const back = () => { navigate("/pokedex") }



    return (
        <div id='content-id'>
            <h1 id='namepokeid'>{pokedeil.name}</h1>
            
            <button className='button-back' onClick={back}> back</button>
            
            <img id='principal-img' src={pokedeil?.sprites?.other.home.front_default} alt="" />
            
            <div id='img-cute'>
                <img alt='' className='minimg' src={pokedeil.sprites?.back_default} />
                <img alt='' className='minimg' src={pokedeil.sprites?.front_default} />
                <img alt='' className='minimg' src={pokedeil.sprites?.back_shiny} />
                <img alt='' className='minimg' src={pokedeil.sprites?.front_shiny} />
            </div>
            
                
                <div id='wei'>
                    <h4>weight: {pokedeil.weight / 10}kg</h4>
                    <h4>height: {pokedeil.height / 10}mts</h4>
                    {pokedeil.types?.map(poke => (
                        <h4 key={poke.type.name}>type: {poke.type.name}</h4>
                    ))}
                </div>

            

            <div >
                {pokedeil.stats?.map(pokestats => (
                   <div className='porgres'>
                    <progress  value={pokestats.base_stat} max="200"></progress>
                    <p>{pokestats.base_stat} {pokestats.stat.name}</p>
                   </div>
                ))}
            </div>











        </div>
    );
};

export default PokemonId;