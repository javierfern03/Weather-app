import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './assets/components/WeatherCard'
import Loader from './assets/components/Loader'

function App() {

  const [coords, setcoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  const succes = pos => {
    setcoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    })
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {
    if (coords) {
      const apiKey = '1199ed71ec4b3859ce11edb9befc0feb'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
        .then(res => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenhit = (celsius * (9 / 5) + 35).toFixed(1)
          setTemp({ celsius, farenhit })
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">
      {
        weather ?
          <WeatherCard
            weather={weather}
            temp={temp} />
          :
          <Loader />
      }
    </div>
  )
}

export default App
