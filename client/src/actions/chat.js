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
        if(data.data==="Please fill all the fields"){
            dispatch({type:'CHANGE_NOTI',which:10});
        }else if(data.data==="Please add more than 1 users"){
            dispatch({type:'CHANGE_NOTI',which:11});
        }else{
            dispatch({type:'CHANGE_NOTI',which:12});
        }
    }catch(err){
        console.log(err);
    }
}
export const sendMessage=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.sendMessage(formData);
        console.log(data);
        dispatch({type:'APPEND_MESSAGE_LIST',data:data});
    }catch(err){
        console.log(err);
    }
}
export const getMessages=(chatId)=>async(dispatch)=>{
    try{
        const {data}=await api.getMessages(chatId);
        console.log(data);
        dispatch({type:'SET_MESSAGE_LIST',data:data});
    }catch(err){
        console.log(err);
    }
}