export function checkLogin(_logged) {

    let loggedIn = false;

    if (localStorage.getItem('user') ) {
        loggedIn = true;
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
