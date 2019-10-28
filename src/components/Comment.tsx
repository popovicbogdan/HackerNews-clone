import React, { Component } from "react";
import axios from "axios";
import { mapTime } from "../functions/mapTime";
import { Link } from "react-router-dom";
interface Props {
  item: number;
}
interface State {
  comment: any;
}

class Comment extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      comment: null
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${this.props.item}.json?print=pretty`
      )
      .then(res =>
        this.setState({
          comment: res.data
        })
      );
  }
  htmlDecode(input: any) {
    var e = document.createElement("textarea");
    e.innerHTML = input;
    return e.value;
  }
  render() {
    console.log("COMMENT", this.state);

    const link = this.state.comment ? `/user/${this.state.comment.by}` : "";

    return this.state.comment ? (
      <div className="Comment container">
        <ul>
          <li>
            <button type="button" className="upvote">
              +
            </button>
          </li>
          <li>
            <Link
              to={{
                pathname: link,
                state: {
                  userId: this.state.comment.kids
                }
              }}
            >
              {this.state.comment.by}
            </Link>
          </li>
          <li>{mapTime(this.state.comment.time)} ago</li>
        </ul>

        <div
          className="comment-text"
          dangerouslySetInnerHTML={{
            __html: this.htmlDecode(this.state.comment.text)
          }}
        />
      </div>
    ) : null;
  }
}

export default Comment;
