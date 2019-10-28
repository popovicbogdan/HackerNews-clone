import React, { Component } from "react";
import Axios from "axios";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

interface searchState {
  user: User;
  date: any;
}
interface User {
  created: number;
  id: string;
  karma: number;
  about: string;
  submitted: [];
}
class User extends Component<RouteComponentProps, searchState, User> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: null,
      date: null
    };
  }

  componentDidMount() {
    var id: any = this.props.location ? this.props.location.state.userId : "";
    Axios.get(
      `https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`
    )
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  }
  htmlDecode(input: any) {
    var e = document.createElement("textarea");
    e.innerHTML = input;
    return e.value;
  }
  render() {
    console.log(this.props);
    console.log(this.state);
    const date = this.state.user
      ? new Date(this.state.user.created * 1000).toLocaleDateString()
      : "";
    const link = this.state.user ? `/submitted/${this.state.user.id}` : "";
    return this.state.user ? (
      <div className="User container">
        <p>user: {this.state.user.id} </p>
        <p>created: {date} </p>
        <p>karma: {this.state.user.karma} </p>
        <div className="about">
          <span>about: </span>
          <ul>
            <li>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.htmlDecode(this.state.user.about)
                }}
              />
            </li>
            <li>
              <Link
                to={{
                  pathname: link,
                  state: {
                    submitted: this.state.user.submitted
                  }
                }}
              >
                submissions
              </Link>
            </li>
            <li>
              <Link to="/comments/">comments</Link>
            </li>
            <li>
              <Link to="/favorites/">favorites</Link>
            </li>
          </ul>{" "}
        </div>
      </div>
    ) : null;
  }
}

export default User;
