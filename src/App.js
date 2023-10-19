import './App.css';
import { useState } from 'react';
import { useEffect } from "react";
import Transporte from './components/Transporte';
import DashBoardClima from './components/DashBoardClima';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=-36.8927&longitude=-60.3225&current=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1')
      .then(resp => resp.json()).then((data) => {
        setWeatherData(data);
        setLoading(false);
      }).catch((ex) => {
        console.error(ex);
      });
  }, [])

  console.log(weatherData);

  return (

    <div className="App">
      <div className="weather-container">
        {!loading && weatherData && <DashBoardClima weatherData={weatherData} />}
        {loading && <h1>Cargando...</h1>}
      </div>
      <div className="bus-container">
        <Transporte />
      </div>
      </div>
  );
}

export default App;
