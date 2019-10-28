import React from "react";
import { RouteComponentProps } from "react-router";
import Comment from "./Comment";

const Comments: React.FC<RouteComponentProps> = props => {
  return props.location.state.comments ? (
    <div className="Comments container">
      <ul>
        {props.location.state.comments.map((item: any) => (
          <li>
            <Comment item={item} />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};
export default Comments;
