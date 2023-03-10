import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from "@mui/material";


function FilmDetails(props){
    let [film, setFilm] = useState({actors: []});
    let {id} = useParams();

    //read from props only if no param passed
    if (id == null)
        id = props.filmId;

    useEffect(()=>{
        //runs once just like constructor
        let url = 'http://localhost:8080/films/' + id;
        let param = { method : 'GET'};
        fetch(url, param)
        .then( data => data.json())
        .then((json) => {
            // console.log(json);s
            setFilm(json);
        }).catch((err) => {
            console.log(err);
        })
    },[])

    return(
        <Card sx ={{maxWidth: 345}}>
            <CardActionArea>
                <CardContent>
                    <h1>Film detail</h1>
                    <div>Title: {film.title}</div>
                    <br />
                    <div>
                        Description : {film.description}
                    </div>
                    <ul>
                        {film.actors.map((actor)=>(
                            <li key = {actor.actorId}>{actor.firstName} {actor.lastName} </li>
                            ))}
                    </ul>
                </CardContent>
            </CardActionArea>
        </Card>
    )


}

export default FilmDetails;