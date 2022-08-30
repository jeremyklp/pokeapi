import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pokemon = ({urlapi}) => {
    const[character, setcharacter]=useState()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(urlapi)
        .then(res => setcharacter(res.data))

    },[urlapi])
   
    

    const leess = () => {
        if (character?.types[0].type.name === "rock" || character?.types[0].type.name === "dark") {
            return ("black")
        }
        else if (character?.types[0].type.name === "fire") {
            return ("red")
        }

        else if (character?.types[0].type.name === "grass") {
            return ("green")
        }

        else if (character?.types[0].type.name === "water") {
            return ("blue")
        }

        else if (character?.types[0].type.name === "fighting" || character?.types[0].type.name === "steel") {
            return ("rgb(88, 83, 83)")
        }

        else if (character?.types[0].type.name === "dragon" || character?.types[0].type.name === "steel") {
            return ("#ff670f")
        }

        else if (character?.types[0].type.name === "ground") {
            return ("#a04917")
        }
        else if (character?.types[0].type.name === "ghost" || character?.types[0].type.name === "psychic") {
            return ("#7917a0")
        }

        else if (character?.types[0].type.name === "fairy") {
            return ("#b91db2")
        }
        else if (character?.types[0].type.name === "ice") {
            return ("#5075ad")
        }
        else if (character?.types[0].type.name === "electric") {
            return ("#c7991a")
        }
    }


    const divStyles = {
        boxShadow: `inset 0px 0px 100px ${leess()}`,

      };
//


   console.log(character?.types[0].type.name);
    
    return (
        <div className='cardd' onClick={()=>navigate(`/pokemon/${character.id}`) } style={{ backgroundColor: leess() }}>
            <h3 id='namepoke'>{character?.name}</h3>
            <img src={character?.sprites.other.home.front_default} alt="" style={divStyles} />
        </div>
    );
};

export default Pokemon;