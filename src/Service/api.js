import axios from "axios";

const URL = "http://localhost:5000";

export function postSignUp(body){
    const promise = axios.post(`${URL}/sign-up`, body);
    return promise;
}