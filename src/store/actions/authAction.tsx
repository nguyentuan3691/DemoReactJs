import httpService from "../../core/httpService";
import { saveToken } from "../../core/jwt.service";

export const loginUser = (formValues: any) => {
  return httpService
    .post("Authentications.Accounts", "Login", formValues)
    .then((response) => {
      if (response.Code === 0) {
        saveToken(response.Data.SessionInfo.Token);
        window.location.assign("/home");
      }
      return response;
    });
};

export const getInfoUserLogin = () => {
  return httpService.get("Authentications.Accounts", "Me").then((response) => {
    return response;
  });
};

export const updateUser = (dataUser: any) => {
  return httpService
    .post("Authentications.Accounts", "Update", dataUser)
    .then((response) => {
      if (dataUser === {}) {
        saveToken(response.Data.SessionInfo.Token);
        localStorage.setItem("dataUser", JSON.stringify(dataUser));
      }
      return response;
    });
};
export const post_image = (dataImage: any) => {
  return httpService
    .post_file("HubCommon.FileUpload", "UploadImage", dataImage)
    .then(response => {
      return response;
    });
};
export const changePassword = (formChangePassword: any) => {
  return httpService
    .post("Authentications.Accounts", "ChangePassword", formChangePassword)
    .then(response => {
      if (formChangePassword === {}) {
        saveToken(response.Data.SessionInfo.Token);
        localStorage.setItem("formChangePassword", JSON.stringify(formChangePassword));
      }
      return response
    })
};

export const registerNewUser = (formRegister: any) => {
  return httpService
    .post("Authentications.Accounts", "Register", formRegister)
    .then(response => {
      if (formRegister === {}) {
        saveToken(response.Data.SessionInfo.Token);
        localStorage.setItem("formRegister", JSON.stringify(formRegister));
      }
      return response
    })
}

export const accountType = () => {
  return httpService
    .get("Authentications.AccountTypes", "GetAccountTypes")
    .then(response => { return response })
};



// export const formMemberList = (memberlist: any) => {
//   return httpService
//     .post("Authentications.Accounts", "GetAccounts", memberlist)
//     .then(response => {
//       if (memberlist === {}) {
//         saveToken(response.Data.SessionInfo.Token);
//         localStorage.setItem("memberlist", JSON.stringify(memberlist));
//       }
//       return response
//     })
// }


export const formMemberList = (memberlist:any) => {
  return httpService.post("Authentications.Accounts", "GetAccounts",memberlist)
  .then((response) => {
    if (memberlist === {}) {
        saveToken(response.Data.SessionInfo.Token);
        localStorage.setItem("memberlist", JSON.stringify(memberlist));
      }
    return response;
  });
};