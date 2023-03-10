import { useRef, useState } from "react";

function Rental() {
    let css = {
        float: 'right',
        position: 'absolute',
        backgroundColor: '#eee',
        width: '200px'
    }

    let [name, setName] = useState('');
    let [customers, setCustomers] = useState([]);
    let [show, setShow] = useState(false);
    let [customerId, setCustomerId] = useState(0);
    let rentalDate = useRef();

    let doSearch = (event) => {
        console.log(event.target.value);
        let newName = event.target.value;
        setName(newName);


        if (newName.length >=3){
            setShow(true);
            //go and fetch data
            let url = 'http://localhost:8080/customer-search?name=' + newName;
            let param = { method: 'GET'}
            fetch(url, param)
            .then(data => data.json())
            .then(json => setCustomers(json));
        }else
            setShow(false); 
    }

    let doSave = () => {
        let data = {customerId: customerId, rentalDate: rentalDate.current.value, inventoryId:1, staffId: 1, lastUpdate: '2022-03-08'}
        let url = 'http://localhost:8080/save-rental';
        console.log(JSON.stringify(data));
        let param = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        fetch(url,param)
        .then((data) => data.json())
        .then(json => console.log(json));
    }

    let doChoose = (cust) => {
        setName(cust.firstName + ' ' + cust.lastName);
        setCustomerId(cust.customerId);
        setShow(false);
    }


    return ( 
        <div>
            <h2>Rental</h2>
            <div className="row mb-2">
                <div className="col-md-2">Customer</div>
                <div className="col-md-4">
                    <input type="text" className ="form-control" placeholder="Enter customer name" onChange={doSearch} value={name}/>
                    {show &&
                        <div style={css}>
                            <ul>
                                {customers.map((cust) =>(
                                    <li key={cust.customerId} onClick={() => doChoose(cust)}>{cust.firstName} {cust.lastName}</li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">Rental Date</div>
                <div className="col-md-4">
                    <input type="date" className="form-control" ref={rentalDate}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-primary" onClick={() => doSave()}/>
                </div>
            </div>
        </div>
     );
}

export default Rental;