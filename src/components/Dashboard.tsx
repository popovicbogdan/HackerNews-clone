import React, { Component } from "react";
import Home from "./Home";
import User from "./User";
import { Route, Switch } from "react-router-dom";
import Submissions from "./Submissions";
import Comments from "./Comments";

class Dashboard extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div className="Dashboard container">
        <Switch>
          <Route
            exact
            path="/"
            render={(props: any) => <Home {...props} search="top" />}
          />
          <Route
            path="/new"
            render={(props: any) => <Home {...props} search="new" />}
          />
          <Route
            path="/jobs"
            render={(props: any) => <Home {...props} search="job" />}
          />
          <Route
            path="/show"
            render={(props: any) => <Home {...props} search="show" />}
          />
          <Route
            path="/ask"
            render={(props: any) => <Home {...props} search="ask" />}
          />
          <Route path="/user/:id" component={User} />
          <Route path="/submitted/:author" component={Submissions} />
          <Route path="/item/:id" component={Comments} />
        </Switch>
      </div>
    );
  }
}
export default Dashboard;
