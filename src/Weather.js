import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiKey = 'YOUR_API_KEY'; 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeather(data);
    };

    return (
        <section className="weather">
            <h2>Weather App</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                />
                <button type="submit">Get Weather</button>
            </form>
            {weather && (
                <div className="weather-info">
                    <h3>{weather.name}</h3>
                    <p>{weather.main.temp}°C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </section>
    );
};

export default Weather;
