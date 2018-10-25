import React, { Component } from "react";
import AddNew from "./AddNew";

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: "Mahran", age: 36 },
      { id: 2, name: "Mario", age: 26 }
    ]
  };

  AddNews = ninja => {
    console.log(ninja);
    ninja.id = Math.random();
    const newNinja = [...this.state.ninjas, ninja];
    this.setState({ ninjas: newNinja });
  };

  render() {
    return (
      <div>
        <h1>My first react app</h1>
        {this.state.ninjas.map(value => (
          <li key={value.id}>{value.name}</li>
        ))}
        <AddNew onAdd={this.AddNews} />
      </div>
    );
  }
}

export default App;
