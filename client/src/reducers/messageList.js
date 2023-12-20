const reducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_MESSAGE_LIST':   
            return action.data.data;
        case 'APPEND_MESSAGE_LIST':
            console.log(action.data);
            if(state.length===0){
                return [...state,action.data.data];
            }else{
                let see=state[state.length-1];
                if(see._id===action.data.data._id){
                    return state;
                }else{
                    return [...state,action.data.data];
                }
            }
        default:
            return state;     
    }
}
export default reducer;