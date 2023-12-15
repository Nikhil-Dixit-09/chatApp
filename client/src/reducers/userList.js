const reducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_USERS':   
            return action.action.data;
        case 'RESET_USER_LIST':
            return [];
        default:
            return state;     
    }
}
export default reducer;