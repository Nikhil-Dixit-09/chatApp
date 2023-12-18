const reducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_GROUP_MEMBERS':   
            return action.data;
        case 'RESET_GROUP_MEMBERS':
            return []; 
        default:
            return state;     
    }
}
export default reducer;