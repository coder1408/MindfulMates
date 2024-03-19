import React from 'react';
import Quiz from './Quiz';
import Welcome from "./Welcome";

function App(props) {
  const loggedIn = props.loggedIn;
  if (loggedIn){
    return <Quiz/>
  }
  else{
    return <Welcome/>
  }
}

export default App;