import React from "react";

function logInButton(props){
    return <button onClick={props.onClick}>
        Login
    </button>
}

function Welcome(props){
    button = <logInButton onClick=""/>
    return <div>
        <h1>Log In</h1>
        {button}
    </div>
}

export default Welcome;