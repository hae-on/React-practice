import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    // habits : habits (둘이 다르지만 이름이 같을 경우 habits 하나만 작성 가능)
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default App;
