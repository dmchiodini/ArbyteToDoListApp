const initialState = { userData: {} }

export default (store = initialState, action) => {
    switch(action.type) {
        case 'DATA_SAVE':
            return { ...store, userData: action.userData };
        default:
            return store; 
    }
};
