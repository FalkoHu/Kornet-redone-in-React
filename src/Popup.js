import React, { Component } from "react";
import "./CSS/Popup.css";

class Popup extends Component {
  render() {
    return (
      <div className="popup" onClick={this.props.closePopup}>
        <div className="popup_inner">
          {this.props.items.restaurants.map(item =>
            item.id === this.props.id ? (
              <div className="content">
                <p><b>Name:</b> {item.name}</p>
                <p><b>Address:</b> {item.address}</p>
                <p><b>City:</b> {item.city}</p>
                <p><b>Phone:</b> {item.phone}</p>
                <button onClick={this.props.closePopup}>Close</button>
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default Popup;
