import React, { Component } from "react";
import axios from "axios";
import { mapTime } from "../functions/mapTime";
import { Link } from "react-router-dom";

interface Props {
  item: number;
  type?: string;
}

interface State {
  comment: any;
}

class Comment extends Component<Props, State> {
  constructor(props: Props) {
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

    const style = this.props.type ? { paddingLeft: "10%" } : null;
    const comment = this.state.comment ? (
      <div className="Comment container" style={style}>
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
                  userId: this.state.comment.by
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

        {this.state.comment.kids
          ? this.state.comment.kids.map((item: any) => (
              <Comment item={item} type="sub" />
            ))
          : null}
      </div>
    ) : null;

    return <div>{comment}</div>;
  }
}

export default Comment;
