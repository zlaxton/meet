import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 12,
    infoText: "",
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className="numberOfEvents">
        <input
          type="text"
          className="EventsNumber"
          value={numberOfEvents}
        />

      </div>
    );
  }
}
export default NumberOfEvents;