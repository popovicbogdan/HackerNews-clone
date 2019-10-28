import React from "react";
import { mapTime } from "../functions/mapTime";
import { Link } from "react-router-dom";

interface Props {
  info: {
    score: number;
    by: string;
    descendants: number;
    time: number;
    id: number;
    kids: [];
  };
}

const Info: React.FC<Props> = props => {
  console.log(props);
  const link = props.info ? `/user/${props.info.by}` : "";
  const comLink = props.info ? `/item/${props.info.id}` : "";
  return props.info ? (
    <div className="Info container">
      <ul>
        <li>
          <span>{props.info.score} points</span>
        </li>
        <li>
          <span>
            by{" "}
            <Link
              to={{
                pathname: link,
                state: {
                  userId: props.info.kids
                }
              }}
            >
              {props.info.by}
            </Link>
          </span>
        </li>
        <li>
          <span>{mapTime(props.info.time)} ago</span>
        </li>

        <li>|</li>
        <li>
          <a href="/">
            <span>hide</span>
          </a>
        </li>
        <li>|</li>
        <li>
          {" "}
          <span>
            <Link
              to={{
                pathname: comLink,
                state: {
                  comments: props.info.kids
                }
              }}
            >
              {" "}
              {props.info.descendants} comments
            </Link>
          </span>
        </li>
      </ul>
    </div>
  ) : null;
};

export default Info;
