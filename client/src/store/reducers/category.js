const categoryReducer = (state = '', action) =>{
    switch(action.type){
        case "SET_CATEGORY":           
            return {
                ...state,
                category: action.value
            };
        default:
            return state;
    } 
}

export default categoryReducer;