const reducer=(state={},action)=>{
    switch(action.type){
        case 'SET_USER':   
            return action.data; 
        default:
            return state;     
    }
}
export default reducer;