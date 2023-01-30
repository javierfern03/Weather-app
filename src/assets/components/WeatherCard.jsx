import React from 'react'
import { useState } from 'react'
const WeatherCard = ({ weather, temp }) => {

  const [isCelsisu, setIsCelsisu] = useState(true)

  const handleclick = () => setIsCelsisu(!isCelsisu)


  return (
    <article className='card'>
      <header className='card__header'>
        <h1 className='card__tittle text--decoration'>{weather && `${weather.name}, ${weather.sys.country}`}</h1>
      </header>
      <section className='card__icon-container'>
        <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
      </section>
      <h3 className='card__temp text--decoration'>{isCelsisu ? `${temp?.celsius} °C` : `${temp?.farenhit} °F`}</h3>


      <footer className='card__footer'>
        <button className='card__btn' onClick={handleclick}>Change to {isCelsisu ? '°F' : '°C'}</button>
        <section className='card__info'>
          <h3 className='card__description'>{weather?.weather[0].description}</h3>
          <ul className='card__list'>
            <li className='card__item'>
              <span className='card__span'>Wind speed:</span> {weather?.wind.speed} m/s
            </li>
            <li className='card__item'>
              <span className='card__span'>Clouds:</span> {weather?.clouds.all} %
            </li>
            <li className='card__item'>
              <span className='card__span'>Pressure:</span> {weather?.main.pressure} hpa
            </li>
          </ul>
        </section>
      </footer>
    </article>
  )
}

export default WeatherCard