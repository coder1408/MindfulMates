const loginButton = document.getElementById("loginButton");

let loggedIn = false;

loginButton.addEventListener('button', (event) => {
    event.preventDefault();
    loggedIn = true;
    
})

function getLoggedIn(){
    return loggedIn;
}

export default getLoggedIn;