import React, { Component } from 'react'
import Weather from './Weather';

export default class Position extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lng: 0,
      isLoading: true
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          isLoading: false
        });
      },(error) => {
        alert(error);
      })
    } else {
      alert("Geolocation disabled!");
    }
  }

  render() {
    const {lat, lng, isLoading} = this.state;   


    if (isLoading) {
      return <p>Loading...</p>
    } else {
      return (
        <div>
          <h3>Your position is</h3>
          <p>Position: {lat.toFixed(3)},{lng.toFixed(3)}</p>
          <Weather lat={lat} lng={lng} />
        </div>
      )
    }

  }
}
