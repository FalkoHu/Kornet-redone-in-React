import React, { Component } from "react";
import "./CSS/Results.css";
import Popuping from "./Popup";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: {},
      showPopup: false,
      popupId: ""
    };
  }

  togglePopup(id) {
    this.setState({
      showPopup: !this.state.showPopup,
      popupId: id
    });
    console.log(this.state.showPopup);
  }

  updateSearch() {
    if(this.props.name !== ''){
      this.search(this.props.name);
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return <p style={{ textAlign: "center" }}>Search for Restaurants</p>;
    } else {
      return (
        <div className="grid-container">
          {this.state.items.restaurants.map(item => (
            <div
              key={item.id}
              className="polaroid"
              onClick={() => this.togglePopup(item.id)}
            >
            <img src={item.image_url} style={{ width: "100%" }} alt="Restaurant Pic" />
            <div className="container">
                <p>{item.name}</p>
            </div>
          </div>
          ))};
          {this.state.showPopup ? (
            <Popuping
              items={this.state.items}
              id={this.state.popupId}
              closePopup={() => this.togglePopup()}
            />
          ) : null}
        </div>
      );
    }
  }

  search(name) {
    fetch("http://opentable.herokuapp.com/api/restaurants?city=" + name)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true
        });
      });
    }
}

export default Results;
