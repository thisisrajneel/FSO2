import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Weather = ({ capital }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState({})

    const hook = () => {
        axios.get("http://api.weatherstack.com/current?access_key=" + api_key + "&query=" + capital).then((response) => setWeather(response.data.current))
    }
    useEffect(hook, {})
    return (
        <>
            <h2>Weather of {capital}</h2>
            <div><strong>temperature:</strong> {weather.temperature} Celcius</div>
            <img src={weather.weather_icons} alt="weather" />
            <div><strong>wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</div>
        </>
    )

}

export default Weather