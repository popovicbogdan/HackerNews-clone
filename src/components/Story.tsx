import React, { Component } from "react";
import Axios from "axios";
import Info from "./Info";

interface Props {
  item: number;
}
interface State {
  story: any;
}

class Story extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      story: {}
    };
  }
  componentDidMount() {
    Axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${this.props.item}.json?print=pretty`
    ).then(res =>
      this.setState({
        story: res.data
      })
    );
  }
  render() {
    const story = this.state.story.type ? this.state.story : null;

    const { score, by, time, descendants, id, kids } = this.state.story;
    console.log(story);

    return story ? (
      <div className="Story container">
        <button type="button" className="upvote">
          +
        </button>
        <a className="title" href={story.url}>
          {story.title}
        </a>

        <a
          className="url"
          style={{ fontSize: "0.8rem", color: "gray" }}
          href={story.url}
        >
          ({story.url})
        </a>

        <Info info={{ score, by, time, descendants, id, kids }} />
      </div>
    ) : null;
  }
}
export default Story;
