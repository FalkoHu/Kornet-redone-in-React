import React, { Component } from "react";

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
    const style = {
        width: '40%',
        border: '1px solid black',
        padding: 8,
        borderRadius: 2,
        marginTop: 5
    };

    return (
      <form onSubmit={this.onSubmit} style={{textAlign: 'center'}}>
        <input type="text" value={this.state.text} placeholder="Restaurant" onChange={this.onChange} style={style}/>
        <input type="submit" value="search" style={{padding: '8px', border: '1px solid black', borderRadius: 2}} />
      </form>
    );
  }
}

export default SearchBar;
