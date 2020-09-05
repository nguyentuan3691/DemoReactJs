const initialState = {
    authApi: false,
    // info: Response.Data
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default authReducer;
