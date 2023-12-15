import axios from 'axios';
const API=axios.create({baseURL:'http://localhost:8000'});
API.interceptors.request.use((req)=>{
    // var tok=JSON.parse(localStorage.getItem('profile')).token;
    // console.log(tok);
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});
export const signin=(formData)=>API.post(`/user/signin`,formData);
export const signup=(formData)=>API.post(`/user/signup`,formData);
export const verify=(formData)=>API.post('/user/verify',formData);
export const getUsers=(keyword)=>API.get(`/user/getUsers/${keyword}`);
export const accessChat=(formData)=>API.post('/chat/accessChat',formData);
export const fetchChat=()=>API.get('/chat/fetchChat');
export const createGroupChat=(formData)=>API.post('/chat/createGroupChat',formData);