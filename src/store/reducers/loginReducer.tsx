const initialState = {
    authApi: false,
}

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default loginReducer;
