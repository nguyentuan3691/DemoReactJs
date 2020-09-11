import React, { Component } from "react";
import { formMemberList } from "../../store/actions/authAction";

class MemberList extends Component {
  props: any = this.props;
  state = {
    Data: {
      Accounts: {
        Id: "",
        PhoneNumber: "",
        Fullname: "",
        Gender: false,
        Address: "",
      },
      listData: "",
    }
  };

  showGender = () => {
    return this.state.Data.Accounts.Gender ? "Male" : "Female";
  };

  formGetMemberList = () => {
    let memberlist = {
      Id: this.state.Data.Accounts.Id,
      PhoneNumber: this.state.Data.Accounts.PhoneNumber,
      FullName: this.state.Data.Accounts.Fullname,
      Address: this.state.Data.Accounts.Address,
    };
    console.log(memberlist);
    return formMemberList(memberlist);
  };
  async componentDidMount() {
    let account =  await this.formGetMemberList();
     console.log(account);
   }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              {/* onClick={() => this.showMemberlist(this.state.Data.Accountsers)} */}
              <th scope="col">ID</th>
              <th scope="col">Member</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Birthday</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{this.state.Data.Accounts.Id}</th>
              <td>{this.state.Data.Accounts.Fullname}</td>
              <td>{this.state.Data.Accounts.Gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MemberList;
