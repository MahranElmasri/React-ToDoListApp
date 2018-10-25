import React, { Component } from "react";

class AddNew extends Component {
  state = {
    name: null,
    age: null
  };
  handelCahnge = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handelCahnge} />
          <label htmlFor="age">Age: </label>
          <input type="text" id="age" onChange={this.handelCahnge} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNew;
