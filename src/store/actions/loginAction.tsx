import httpService from "../../core/httpService";
import { saveToken } from "../../core/jwt.service";


export const loginUser = (formValues: any) => (dispatch: any) =>  {
    return httpService
      .post("Authentications.Accounts", "Login", formValues)
      .then((response) => {
        if (response.Code === 0) {
          saveToken(response.Data.SessionInfo.Token);
          window.location.assign('/home')
        }
      });
  };
