import httpService from "../../core/httpService";
import { saveToken } from "../../core/jwt.service";


const initialState = {
    authApi: false,
}

const loginReducer = (state = initialState, action) => {
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


export const loginUser = (formValue) => (dispatch) => {
  return httpService
    .post("Authentications.Accounts", "Login", formValue)
    .then((response) => {
      debugger;
      if (response.Code === 0) {
        saveToken(response.Data.SessionInfo.Token);
      }
    });
};