import axios from "axios";

const URL = "https://techstore-back-end.herokuapp.com";

const createHeaders= (token) => {
    return {
        headers: {'Authorization': `Bearer ${token}`}
    }
} 

export function postSignUp(body){
    const promise = axios.post(`${URL}/sign-up`, body);
    return promise;
}
export function postSignIn(body){
    const promise = axios.post(`${URL}/sign-in`, body);
    return promise;
}


export function postCheckout(body, token){
    const promise = axios.post(`${URL}/checkout`, body, createHeaders(token));
    return promise;
}

