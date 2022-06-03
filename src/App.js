import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Userlogin from './components/Userlogin';
import Pokedex from './components/Pokedex';

import ProtectedRoutes from './components/Protect';
import PokemonId from './components/PokemonId';
function App() {



  return (
<HashRouter>
    
    <Routes>

        <Route path='/' element={<Userlogin/>}/>
        


        <Route element={<ProtectedRoutes/>}>

          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokemon/:id' element={<PokemonId/>}/>

        </Route>
        

    </Routes>
</HashRouter>
    
  );
}

export default App;
