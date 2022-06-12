import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  counter: number;
};

export class ClassCounter extends Component<CounterProps, CounterState> {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState?.counter + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.counter}
      </div>
    );
  }
}
