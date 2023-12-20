const reducer=(state={},action)=>{
    switch(action.type){
        case 'SET_MESSAGE':   
            return action.data; 
        case 'RESET_MESSAGE':
            console.log('hiiii,1123456789876543');
            return {};
        default:
            return state;     
    }
}
export default reducer;