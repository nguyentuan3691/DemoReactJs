import React, { Component } from "react";
import { formMemberList} from "../../store/actions/authAction";

class MemberList extends Component {
  props: any = this.props;
  state = {
        Accounts: {
            Id: "",
            AccountType: "",
            PhoneNumber: "",
            Email: "",
            Fullname: "",
            AvatarUrl: "",
            Gender: false,
            State: "",
            Birthday: "",
            Address: "",
            LastDateTimeLogin: "",
            CreateDateTime: "",
            UpdateDateTime: "",
          }
  };

  // "Accounts": [
  //     {
  //         "Id": 1020,
  //         "AccountType": "Reviewer",
  //         "PhoneNumber": "0908123456",
  //         "Email": "edenhazard@gmail.com",
  //         "Fullname": "Eden Hazard",
  //         "AvatarUrl": "",
  //         "Gender": false,
  //         "State": 0,
  //         "Birthday": "2020-11-09T00:00:00",
  //         "Address": "BH",
  //         "LastDateTimeLogin": "2020-09-09T10:01:11.657",
  //         "CreateDateTime": "2020-09-09T10:00:47.46",
  //         "UpdateDateTime": "2020-09-09T10:00:47.46"
  //     },
  async componentDidMount() {
    let memberlist = await formMemberList({});
    console.log(memberlist);
  }
  render() {
    return (
      <div className="container">
        
      </div>
    );
  }
}

export default MemberList;
