import React, { Component } from 'react'
import './App.css'
import Test from './Test'
import ReactAnimatedWeather from 'react-animated-weather';
import Search from './search';


  
const defaults = {
  icon: 'CLEAR_DAY',
  color: 'DarkOrange',
  size: 50,
  animate: true
};

class App extends Component {
  state = { 
    city: 'Hyderabad',
    temp: 0,
    date: 0,
    country: 'Country',
    visible: false,
  }
  
  componentDidMount(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad,36,+91&appid=199e13896d6fe6ab927beeb870553e50&units=metric')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({city: data.name, temp: data.main.temp, date: data.dt.date, country: data.sys.country, visible: true})
      
    })
  }
  render() {
    return (
      <div className="card col-4  bg-image">
        <div className="card-body">
          <Search/>
          <h5 className="card-title">{this.state.visible ? this.state.city : 'Loading...'}</h5>
          <h4 className="date">{this.state.visible ? this.state.date : 'Loading...'}</h4>
          <h6 className='text-black'>Sunny Day</h6>
          <Test country={this.state.country} />
          <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
          />
          <h1 className="temp">{this.state.temp}°C</h1>
        </div>
      </div>
    );
  }
}


export default App;