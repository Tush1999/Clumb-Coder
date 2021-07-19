import React, { useState} from 'react';
import { GoogleLogin} from 'react-google-login';
import { withRouter } from "react-router";


const clientId="416870361032-psds1vid5f90sd3iktctis25s4p044np.apps.googleusercontent.com"

function Login(props) {

    const [showloginButton, setShowloginButton] = useState(true);
    const onLoginSuccess = (res) => {
        setShowloginButton(false);
        props.history.push("/Home")
    };
   
    return (
        <div className="login">
            <h1 style={{margin:"30px"}}>Welcome to Login Page</h1>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    cookiePolicy={'single_host_origin'}   
                /> : null}
           
        </div>
    );
}
export default withRouter(Login);