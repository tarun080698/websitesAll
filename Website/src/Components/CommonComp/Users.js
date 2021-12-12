import React, { Component } from "react";
import UserItem from "../CommonComp/User";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/users")
      .then((res) => res.json())
      .then((result) => {
        this.setState(
          {
            users: result,
          },
          () => {
            console.log(this.state.users);
          }
        );
      });
  }

  render() {
    const MyUsers =
      this.state.users !== [] ? (
        this.state.users.map((user) => {
          return (
            <UserItem {...user} key={user.id} />
            // <div className="collection-item" key={user.id}>
            //   <span className="center red-text">{user.username}</span>
            //   <span className="center black-text">{user.email}</span>
            // </div>
          );
        })
      ) : (
        <p className="center green-text">No tasks for today!</p>
      );
    return <div>{MyUsers}</div>;
  }
}
export default Users;
