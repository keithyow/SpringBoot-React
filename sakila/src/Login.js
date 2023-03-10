import { useRef, useState } from "react";
import Button from '@mui/material/Button';

function Login({doAuth, doRole}) {
    let userId = useRef();
    let password = useRef();
    let [msg, setMsg] = useState();


    function doLogin(event){
        event.preventDefault();
        console.log(userId.current.value, password.current.value);
        if(userId.current.value === 'user' && password.current.value === '1234'){
            doAuth(true);
            doRole('USER')
        } else if(userId.current.value === 'admin' && password.current.value === '1234'){
            doAuth(true);
            doRole('ADMIN')
        } else{
            setMsg('Wrong login credentials');
        }
        // alert('ok')  ;
    }


    return ( 
        <div id='login'>
            {msg &&     <div className='alert alert-danger'> {msg}</div>}
            <form onSubmit={ doLogin }>
                <div className="row">
                    <div className="col-md-12">
                        User ID
                        <input type='text' className= 'form-control' ref={userId}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        Password
                        <input type='password' className= 'form-control' ref={password}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <Button type='submit' variant="contained"> Login</Button>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default Login;