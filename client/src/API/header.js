export const headerA = () => {
    
    let auth = '';
    let user = localStorage.getItem('user') 

    if (localStorage.getItem('user') ) {
        auth = JSON.parse(user).token
    }

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth
    }

    return headers

}
