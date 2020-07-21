export function checkLogin(_logged) {

    let loggedIn = true;

    if (localStorage.getItem('user') === null ) {
        loggedIn = false;
    }
    
    return loggedIn;
}

export function checkAdmin(){

    let isAdmin = false;

    let user = localStorage.getItem('user')

    if (JSON.parse(user).userType === 'A'){
        isAdmin = true;
    }
    
    return isAdmin;
}
