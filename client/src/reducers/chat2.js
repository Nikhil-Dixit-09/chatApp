const reducer=(state="",action)=>{
    switch(action.type){
        case 'SET_CUR_CHAT':
            console.log(action);   
            return action.chat;
        case 'RESET_CUR_CHAT':
            return ""; 
        default:
            return state;     
    }
}
export default reducer;