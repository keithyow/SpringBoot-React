import Menu from './Menu'
import ActorList from './actor/ActorList';
import FilmList from './film/FilmList';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FilmDetails from './film/FilmDetails';
import FilmSearch from './film/FilmSearch';
import Rental from './film/Rental';
import GuessGame from './guessGame/GuessGame';
import Login from './Login';
import { useState } from 'react';
import InvestmentCalculator from './investment/InvestmentCalculator';

function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let [role, setRole] = useState('user');

  if( !loggedIn){
    return <Login doAuth = {setLoggedIn} doRole ={setRole}/>
  }

  return (
    <Router>
      <Menu logout = {setLoggedIn} role ={role}/>
      <Routes>
        <Route path='/' element ={<FilmList />}></Route>
        <Route path='/actors' element ={<ActorList />}></Route>
        <Route path='/films/:id' element ={<FilmDetails />}></Route>
        <Route path='/films-search' element ={<FilmSearch />}></Route>
        <Route path='investment' element={<InvestmentCalculator/>}></Route>
        { role === 'ADMIN' &&(
          <>

          <Route path='/rental' element ={<Rental/>}></Route>
          <Route path='/guess-game' element ={<GuessGame/>}></Route>
        
          </>
        )}
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
