import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "green";
  }
  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: "white",
    };
  };
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: "white",
    };
  };
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "orange";
  }
  getStyle = () => {
    return {
      color: this.color,
      background: "white",
    };
  };
}

export { InfoAlert, ErrorAlert, WarningAlert };
