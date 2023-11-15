import * as api from '../api';
export const signin=(formData,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.signin(formData);
        dispatch({type:'AUTH',data});
        navigate('/');
        console.log(data);
        
        
    }catch(error){
        console.log(error);
    }
}
export const signups=(formData,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.signup(formData);
        console.log(data);
            dispatch({type:'AUTH',data});
            navigate('/');
        
        
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
