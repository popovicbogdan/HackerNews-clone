import React, { Component } from "react";
import Story from "./Story";
import { RouteComponentProps } from "react-router";
import SingleSubmittion from "./SingleSubmittion";

class Submissions extends Component<RouteComponentProps> {
  render() {
    console.log("SUBMISSIONS: ", this.props);
    var items = this.props.location.state.submitted
      ? this.props.location.state.submitted
      : null;
    return (
      <div className="Submissions container">
        <ol className="submissionList">
          {items
            ? items.slice(0, 30).map((item: number) => (
                <li key={item}>
                  <Story item={item} />
                </li>
              ))
            : null}
        </ol>
      </div>
    );
  }
}

export default Submissions;
