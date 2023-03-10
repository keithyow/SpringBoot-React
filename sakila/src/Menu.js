import {Link} from 'react-router-dom';
import {FaBeer} from 'react-icons/fa';

function Menu({logout, role}){
    const doLogout = () => {
        logout(false);
    }
    return(
        <div className='navbar'>    
            <h1><FaBeer />  Sakila Store</h1>
            <div className='links'>
                <Link to ="/">Home</Link>
                <Link to ="/films-search">Films</Link>
                <Link to ="/actors">Actors</Link>   

                {role === 'ADMIN' && (
                    <>
                        <Link to ="/rental">Rental</Link>
                        <Link to ="/guess-game">Guess Game</Link>
                    </>
                )}
                <a href='##' onClick={ doLogout}>Logout</a>
            </div>
        </div>
    )
}

export default Menu;