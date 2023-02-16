import axios from "axios";

export function GetAxios (url) {
    return new Promise((resolve,reject) => {
        axios.get(url).then((response) => resolve(response))
        .catch((error) => console.log(error));
    });
}