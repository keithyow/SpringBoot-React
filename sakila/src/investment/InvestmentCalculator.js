import { useRef, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from "@mui/material";
import Button from '@mui/material/Button';

function InvestmentCalculator() {
    let inAmount = useRef();
    let inYears = useRef();
    let inRate = useRef();
    let[isShow, setIsShow] = useState(false);
    let[result, setResult] = useState([]);

    function doCalc(event){
        event.preventDefault();
        setIsShow(true);
        console.log(inAmount.current.value, inYears.current.value, inRate.current.value);
        let url = 'http://localhost:8080/investment/?'+ 'amount='+ inAmount.current.value +'&years=' + inYears.current.value + '&rate=' + inRate.current.value;
        let param = {method : 'GET'}
        fetch(url, param)
        .then(data => data.json())
        .then(json => setResult(json));
    }

    return ( 
        <div>
            <form onSubmit={doCalc}>
                <div className="row">
                    <div className="col-md-12">
                        Investment Amount(RM)
                        <input type='text' className= 'form-control' ref={inAmount}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        Duration (years)
                        <input type='text' className= 'form-control' ref={inYears}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        Profit Rate (%)
                        <input type='text' className= 'form-control' ref={inRate}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <Button type='submit' variant="contained">Submit</Button>
                    </div>
                </div>
            </form>
            {isShow && <Card sx ={{maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                        <table className = "table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Investment</th>
                                    <th>Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.map((r) => (
                                    <tr key = {r.year}>
                                        <td>{r.year}</td>
                                        <td>{r.amount}</td>
                                        <td>{r.profit}</td>
                                    </tr>
                            ))}
                            </tbody>
                        </table>
                    </CardContent>
                </CardActionArea>
            </Card>}
            
        </div>
     );
}

export default InvestmentCalculator;