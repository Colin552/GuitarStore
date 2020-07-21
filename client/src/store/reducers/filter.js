const filterReducer = (state = '', action) => {
    switch (action.type) {
        case "SET_FILTER":
            return {
                ...state,
                filter: action.value
            };
        default:
            return state;
    }
}

export default filterReducer;