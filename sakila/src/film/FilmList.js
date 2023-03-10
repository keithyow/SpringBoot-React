import {useEffect, useState} from "react";
import FilmDetails from "./FilmDetails";

function FilmList(){
    let [film, setFilm] = useState([]);
    let [filmId, setFilmId] = useState([1]);

    useEffect(()=>{
        //runs once just like constructor
        // console.log("WMAANDINAIFNNG");
        let url = 'http://localhost:8080/films';
        let param = { method : 'GET'};
        fetch(url, param).then((data) => {
            return data.json();
        }).then((json) => {
            // console.log(json);s
            setFilm(json);
        }).catch((err) => {
            console.log(err);
        })
    },[]);

    const doClick = (filmId) =>{
        setFilmId(filmId);
    }


    return(
        <div>
            <div className="row">
                <div className="col-md-8">
                    <h1>Film List</h1>
                    <table className = "table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {film.map((f, no) => (
                                <tr key = {f.filmId}>
                                    <td>{no + 1}</td>
                                    <td><a href ='##' onClick = {() => doClick(f.filmId)}>{f.title}</a></td>
                                    <td>{f.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <FilmDetails filmId = {filmId} key={filmId} />
                </div>            
            </div>
        </div>
    )
}

export default FilmList;