export const loginUser = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: user
    }
}