import {useEffect, useState} from "react";

function ActorList(){
    let [actor, setActor] = useState([]);

    useEffect(()=>{
        //runs once just like constructor
        console.log("WMAANDINAIFNNG");
        let url = 'http://localhost:8080/actors';
        let param = { method : 'GET'};
        fetch(url, param).then((data) => {
            return data.json();
        }).then((json) => {
            // console.log(json);
            setActor(json);
        }).catch((err) => {
            console.log(err);
        })
    },[])


    return(
        <div>
            <h1>Actor List</h1>
            <table class = "table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {actor.map((a, no) => (
                        <tr key = {a.actorId}>
                            <th>{no + 1}</th>
                            <th>{a.firstName}</th>
                            <th>{a.lastName}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ActorList;