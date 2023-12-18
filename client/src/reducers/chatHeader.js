const reducer=(state="",action)=>{
    switch(action.type){
        case 'SET_CHAT_HEADER':
            console.log(action);   
            return action.chat;
        case 'RESET_CHAT_HEADER':
            return "";
        default:
            return state;
    }
}
export default reducer;