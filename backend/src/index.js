import React from 'react';
import App from './Components/App';
import { createRoot } from 'react-dom/client';

let isLoggedIn = false;

function handleLogIn(){
    isLoggedIn = true;
}

const root = createRoot(document.getElementById('root'));
const loggedIn = getLoggedIn();
root.render(<App loggedIn={loggedIn}/>);