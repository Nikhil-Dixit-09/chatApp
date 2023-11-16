const reducer=(state=0,action)=>{
    switch(action.type){
        case 'CHANGE_NOTI':
            console.log(action);   
            return action.which;
        case 'RESET':
            return action.which; 
        default:
            return state;     
    }
}
export default reducer;