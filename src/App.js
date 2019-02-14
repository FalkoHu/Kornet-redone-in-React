import React, { Component } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Results from "./Results";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: null
    };
    this.results = React.createRef();
  }

  clickedHandler = data => {
    this.setState({
      restaurants: data
    });
    this.results.current.updateSearch(data);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar submitHandler={this.clickedHandler} />
        <h2 style={{textAlign: 'center'}}>{this.state.restaurants}</h2>
        <Results name={this.state.restaurants} ref={this.results} />
      </div>
    );
  }
}

export default App;
