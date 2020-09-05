import httpService from "../../core/httpService";
import { saveToken } from "../../core/jwt.service";


export const loginUser = (formValues: any) => {
  console.log("loginUser");
  return httpService
    .post("Authentications.Accounts", "Login", formValues)
    .then((response) => {
      console.log("res from loginAction", response);
      
      if (response.Code === 0) {
        saveToken(response.Data.SessionInfo.Token);
        window.location.assign('/home')
      }
    });
};

export const getInfoUserLogin = () => (dispatch: any) => {
  return httpService
    .get("Authentications.Accounts", "Me")
    .then((response) => {
      const  Account = response.Data;
      console.log("res from get information" + Account);
      // dispatch({
      //   type: "GET_INFO_USER_SUCCESS",
      //   payload: {
      //     user: { ...Account }
      //   },
      // });
      
    })
};
