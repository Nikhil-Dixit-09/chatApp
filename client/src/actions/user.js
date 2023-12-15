import * as api from '../api'
export const getUserList=(keyword)=>async(dispatch)=>{
    try{
        const {data}=await api.getUsers(keyword);
        console.log(data);
        dispatch({type:'SET_USERS',action:data});
    }catch(err){
        console.log(err);
    }
}
