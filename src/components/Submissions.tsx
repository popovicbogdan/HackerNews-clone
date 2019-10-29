import React from "react";
import Story from "./Story";
import { RouteComponentProps } from "react-router";

const Submissions: React.FC<RouteComponentProps> = (props: any) => {
  console.log("SUBMISSIONS: ", props);
  var items = props.location.state.submitted
    ? props.location.state.submitted
    : null;
  return (
    <div className="Submissions container">
      <ol className="submissionList">
        {items
          ? items.slice(0, 30).map((item: number) => (
              <li key={item} className="submitted">
                <Story item={item} />
              </li>
            ))
          : null}
      </ol>
    </div>
  );
};

export default Submissions;
