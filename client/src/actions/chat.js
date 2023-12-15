import * as api from '../api'
export const accessChat=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.accessChat(formData);
        console.log(data);
        dispatch({type:'CHANGE_NOTI',which:9});
    }catch(err){
        console.log(err);
    }
}
export const fetchChat=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchChat();
        console.log(data);
        dispatch({type:'SET_CHATS',action:data});
    }catch(err){
        console.log(err);
    }
}
export const createGroupChat=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.createGroupChat(formData);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}