import './film.css'
import { useEffect, useState } from 'react';

function FilmEdit(props) {
    let [isShow, setIsShow] = useState(false);
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [filmId, setFilmId] = useState(0);


    useEffect(()=> {
        setIsShow(props.isShow);
        let url = 'http://localhost:8080/films/' + props.filmId;
        let param = {method: 'GET'};
        fetch(url, param)
        .then(data => data.json())
        .then(json => {
            setTitle(json.title);
            setDescription(json.description);
            setFilmId(json.filmId);
        });
    }, []);

    function doSave(){
        let url = 'http://localhost:8080/film-save/';
        let data = {filmId, title, description};
        let param = {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body:  JSON.stringify(data)
        };
        fetch(url, param)
        .then(data => data.json())
        .then(json => {
            console.log(json);
        });
    }
    
    if(isShow)
        return ( 
            <div id ='myform'>
                <h4>Edit Film</h4>
                <div className='row mb-2'>
                    <div className='col-md-12'>
                        <label>Title</label>
                        <input type = 'text' className='form-control' value = {title} onChange={(event)=> setTitle(event.target.value)}/>
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col-md-12'>
                        <label>Description</label>
                        <textarea className='form-control' value = {description} onChange={(event) => setDescription(event.target.value)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <button  onClick={() => {setIsShow(false); doSave();}} className='btn btn-primary'>Submit</button>
                        <button onClick={() => {setIsShow(false);}} className='btn btn-warning'>Close</button>
                    </div>
                </div>

                
            </div>
            );
    else{
        return null;
    }
}

export default FilmEdit;