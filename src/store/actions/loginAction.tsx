import httpService from "../../core/httpService";
import { saveToken } from "../../core/jwt.service";
import RouterURL from "../../components/routes/RouterURL"


export const loginUser = (formValues: any) => {
  console.log("loginUser");
  return httpService
    .post("Authentications.Accounts", "Login", formValues)
    .then((response) => {
      if (response.Code === 0) {
        saveToken(response.Data.SessionInfo.Token);
        window.location.assign('/home')
        // window.location.assign('/home')
      }
    });
};
