import React, { Component } from "react";
import axios from "axios";
import Story from "./Story";

interface Props {
  search: string;
}
interface State {
  items: [];
  scroll: { firstIndex: number; lastIndex: number; counter: number };
}
class Home extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      scroll: {
        firstIndex: 0,
        lastIndex: 30,
        counter: 0
      }
    };
    this.getStories = this.getStories.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e: any) => {
    const { firstIndex, lastIndex, counter } = this.state.scroll;
    if (e.target.value === "more") {
      this.setState({
        ...this.state,
        scroll: {
          firstIndex: firstIndex + 30,
          lastIndex: lastIndex + 30,
          counter: counter + 1
        }
      });
    } else {
      this.setState({
        ...this.state,
        scroll: {
          firstIndex: firstIndex - 30,
          lastIndex: lastIndex - 30,
          counter: counter - 1
        }
      });
    }
  };

  getStories = (search: string) => {
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/${search}stories.json?print=pretty`
      )
      .then(res => {
        this.setState({
          items: res.data
        });
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.getStories(this.props.search);
  }
  componentDidUpdate(prevProps: any) {
    if (prevProps.search !== this.props.search) {
      this.getStories(this.props.search);
    }
  }
  render() {
    console.log("HOme rendered");
    const style = this.state.scroll.counter === 0 ? { display: "none" } : null;
    return (
      <div className="Home container">
        <button
          type="button"
          className="bttn less"
          value="less"
          onClick={this.handleClick}
          style={style}
        >
          less
        </button>
        <ol start={this.state.scroll.firstIndex + 1}>
          {this.state.items
            ? this.state.items
                .slice(
                  this.state.scroll.firstIndex,
                  this.state.scroll.lastIndex
                )
                .map((item: number) => (
                  <li key={item}>
                    <Story item={item} />
                  </li>
                ))
            : null}
        </ol>
        <button
          type="button"
          className="bttn"
          value="more"
          onClick={this.handleClick}
        >
          more
        </button>
      </div>
    );
  }
}
export default Home;
