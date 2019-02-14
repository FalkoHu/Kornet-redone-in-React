import React, { Component } from "react";
import "./CSS/SearchBar.css";

class SearchBar extends Component {
  state = {
    text: ""
  };

  onChange = e =>
    this.setState({
      text: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    this.props.submitHandler(this.state.text);
  };
  render() {
    return (
      <div className="formDiv">
        <p>Search for Restaurants in your City</p>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            value={this.state.text}
            placeholder="Restaurant"
            onChange={this.onChange}
            className="inputText"
          />
          <br />
          <input type="submit" value="Search" className="submitButton" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
