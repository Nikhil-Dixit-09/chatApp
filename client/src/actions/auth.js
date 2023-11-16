import * as api from '../api'
export const signin=(formData,navigate)=>async(dispatch)=>{
    try{
      
        const {data}=await api.signin(formData);
        if(data.message==="User does not exist"){
            dispatch({type:'CHANGE_NOTI',which:1});
        }else if(data.message==="Invalid Credentials"){
            dispatch({type:'CHANGE_NOTI',which:2});
        }else if(data.message==="Something went wrong"){
            dispatch({type:'CHANGE_NOTI',which:3});
        }else{
            dispatch({type:'CHANGE_NOTI',which:4});
            dispatch({type:'AUTH',data});
            navigate('/');
        }
        
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
export const signups=(formData,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.signup(formData);
        if(data.message==="User already exists"){
            dispatch({type:'CHANGE_NOTI',which:5});
        }else if(data.message==="Passwords don't match"){
            dispatch({type:'CHANGE_NOTI',which:6});
        }else{
            dispatch({type:'CHANGE_NOTI',which:7});
            dispatch({type:'AUTH',data});
            navigate('/');
        }
            
        
        
        console.log(data);
    }catch(error){
        console.log(error);
    }

    
}
export const logout=(navigate)=>async(dispatch)=>{
    try{
        dispatch({type:'LOGOUT'});
        navigate('/auth');
        
    }catch(error){
        console.log(error);
    }
}
export const verify=(formData)=>async(dispatch)=>{
    try{
        const {data}=await api.verify(formData);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
