import { useEffect, useRef, useState } from "react";


function GuessGame() {
    let[outcome, setOutcome] = useState('');
    let[answerId, setAnswerId] = useState(0);
    let[isShow, setIsShow] = useState(false);
    let[count, setCount] = useState(0);
    let guess = useRef(0);

    useEffect(()=> {
        let url = 'http://localhost:8080/guess-game/start';
        let param = {method : 'GET'}
        fetch(url, param)
        .then(response => response.json())
        .then(data => setAnswerId(data));
    }, [])

    function submit(){
        setCount(count + 1);
        let val = guess.current.value;
        console.log(val);
        let url = 'http://localhost:8080/guess-game/guess/'+ answerId +'/' + val;
        let param = {method : 'GET'}
        fetch(url, param)
        .then(response=> response.text())
        .then(data => setOutcome(data));

        if(outcome === "Congrats! You've Guessed the Correct Number!"){
            setOutcome(outcome + "final count: " + count)
        }
    }

    return ( 
        <div>
            <div className="row">
                <div className="col-md-8">

                    <h2>Guess Game</h2>
                    <p>Put in your guess</p>
                    <input className='form-control' type="number" placeholder="Enter your guess" ref = {guess}/>
                    <button  onClick={() => {setIsShow(true); submit();}} className='btn btn-primary'>Submit</button>
                    {isShow && <p>
                        {outcome}
                        </p>}
                </div>
                    
            </div>
        </div>
     );
}

export default GuessGame;