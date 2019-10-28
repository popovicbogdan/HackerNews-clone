import React, { Component } from "react";
import axios from "axios";

interface Props {
  search: string;
}
interface State {
  items: [];
}

class NewNews extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/${this.props.search}stories.json?print=pretty`
      )
      .then(res => {
        this.setState({
          items: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return <div></div>;
  }
}

export default NewNews;
