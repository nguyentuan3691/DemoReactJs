import httpService from "../../core/httpService";
import { saveToken } from "../../core/jwt.service";


export const loginUser = (formValues: any) => {
  return httpService
    .post("Authentications.Accounts", "Login", formValues)
    .then((response) => {
      if (response.Code === 0) {
        saveToken(response.Data.SessionInfo.Token);
        window.location.assign('/home')
      }

      return response;
    });
};

export const getInfoUserLogin = () => {
  return httpService
    .get("Authentications.Accounts", "Me").then(response => {
      
      return response;
    });
    // .then((response) => {
    //   const  Account = response.Data;
    //   console.log("getInfoUserLogin");
    //   console.log(Account);
    //   // dispatch({
    //   //   type: "GET_INFO_USER_SUCCESS",
    //   //   payload: {
    //   //     user: { ...Account }
    //   //   },
    //   // });
      
    // })
};
