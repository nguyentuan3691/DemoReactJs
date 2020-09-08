import axios from 'axios';
import JwtService from './jwt.service'
import { success, error } from './config/sweetalert'


// khởi tạo đối tượng của axios để dùng
const http = axios.create({
  baseURL: 'http://dev.api.esrax.com/handler.dll',
  responseType: 'json',
  headers: {
    "Content-Type": "application/json"
  }
});

//trong 1 request gom co 1 header (token), body, query
const HttpService = {
  // biến đếm số task đang thực hiện
  CountTask: 0,

  setHeader(key: any, value: any) {
    http.defaults.headers.common[key] = value;
  },

  // check header if auth or content-type
  checkHeaders() {
    let token = JwtService.getToken();
    if (token) {
      this.setHeader("Authorization", token);
    }
  },

  get(object: string, method: string) {
    this.CountTask += 1;
    this.checkHeaders();

    let result = http.get("?object=" + object + "&method=" + method).then((response: any) => {
      this.doProcess(response.data)
      return response.data;
    });
    return result;
  },

  post(object: string, method: string, params: any) {
    this.CountTask += 1;
    this.checkHeaders();

    var result = http.post("?object=" + object + "&method=" + method, params).then((response: any) => {
      this.doProcess(response.data)
      return response.data;
    });

    return result;
  },

  post_file(object: string, method: string, params: any) {
    this.CountTask += 1;
    this.checkHeaders();
    this.setHeader("Content-Type", "multipart/form-data")
    var result = http.post("?object=" + object + "&method=" + method, params).then((response: any) => {
      this.doProcess(response.data)
      return response.data;
    });
    return result;
  },

  doProcess(data: any) {
    if (data.JavaScript) {
      // eslint-disable-next-line no-eval
      eval(data.JavaScript);
    }
    // chưa hoàn thành thực hiện tiếp tục delay
    if (!data.Finish) {
      this.doCheckThreadProcess(data.ThreadId);
      return false;
    }
    this.CountTask -= 1;
    switch (data.Succeed) {
      case true: {
        if (data.Messages.length > 0) {
          // hiển thị thông báo thành công của server
          success(data.Messages, 3000)
        }
        break;
      }
      case false: {
        if (data.Messages.length > 0 || data.Code === -1) {
          if (data.Code === 1) {
            // phiên đăng nhập hết hạn, chuyển hướng về trang đăng nhập
          }
          error(data.Messages, 3000)
        }
        return false;
      }
    }
  },
  doCheckThreadProcess(threadId: string) {
    setTimeout(() => {
      this.post("HubCommon.HubThread", "Get", { ThreadId: threadId }).then(
        () => {
          this.CountTask -= 1;
        }
      );
    }, 500);
  }
};
// let opened = false;

//   setInterval(() => {
//     if (http.CountTask > 0 && !opened) {
//       loader.open();
//       opened = true;
//     } else if (http.CountTask <= 0 && opened) {
//       loader.hide();
//       opened = false;
//     }
//   }, 300);

export default HttpService;
