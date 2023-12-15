const reducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_CHATS':   
            return action.action.data;
        case 'RESET_CHATS_LIST':
            return [];
        default:
            return state;     
    }
}
export default reducer;