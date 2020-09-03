const USER_DATA = "user_data";
// const TOKEN_KEY = "token";
const TOKEN_KEY = "id_token";

export const getToken = () => {
    return window.localStorage.getItem(TOKEN_KEY) ?? "";
};

export const saveToken = (value) => {
    window.localStorage.setItem(TOKEN_KEY, value);
};

export const encryptUser = user => {
    const objStr = JSON.stringify(user);
    const encryptedValue = new Buffer(objStr).toString("base64");
    return encryptedValue;
};

export const decryptUser = () => {
    const data = localStorage.getItem(USER_DATA);
    if (!data) {
      return null;
    }
    const strObj = new Buffer(data || "", "base64").toString("utf8");
    const value = JSON.parse(strObj);
    return value;
};

export const saveUserData = user => {
    window.localStorage.setItem(USER_DATA, encryptUser(user));
};

export default {getToken, encryptUser, decryptUser, saveUserData};