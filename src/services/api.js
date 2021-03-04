import axios from 'axios';

const baseURL='https://stormy-mesa-81915.herokuapp.com/';

export default (method,url,data,header) =>{
    return axios({
        url:baseURL+url,
        method,
        data,
        headers: header
    });
}


