const reducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_MESSAGE_LIST':   
            return action.data.data;
        case 'APPEND_MESSAGE_LIST':
            console.log(action.data);
            return [...state,action.data.data]; 
        default:
            return state;     
    }
}
export default reducer;