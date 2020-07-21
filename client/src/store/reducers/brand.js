const brandReducer = (state = '', action) => {
    switch (action.type) {
        case "SET_BRAND":
            return {
                ...state,
                brand: action.value
            };
        default:
            return state;
    }
}

export default brandReducer;