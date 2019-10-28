import React, { Component } from "react";
import Axios from "axios";

interface Props {
  item: number;
}
interface State {
  item: {};
}

class SingleSubmittion extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      item: null
    };
  }
  componentDidMount() {
    Axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${this.props.item}.json?print=pretty`
    ).then(res =>
      this.setState({
        item: res.data
      })
    );
  }
  render() {
    console.log("SUBMITTION STATE: ", this.state);

    return <div></div>;
  }
}

export default SingleSubmittion;
