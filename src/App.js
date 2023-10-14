import './App.css';
import TempActual from './components/TempActual';
import TempHora from './components/TempHora';
import Humedad from './components/Humedad';
import IndiceUV from './components/IndiceUV';
import Viento from './components/Viento';
import AmanecerPuesta from './components/AmanecerPuesta';
import MaxMin from './components/MaxMin';
import Visibilidad from './components/Visibilidad';
import CalidadAire from './components/CalidadAire';
import data from './api/api.json';
import { useState } from 'react';
import { useEffect } from "react";

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

  const calidad = data["hourly"]["european_aqi"];

  return (
    <div className="App">

      <div className="weather-container">

        {!loading && weatherData &&
          <div className='titulo'>Hoy</div>}

        {!loading && weatherData &&
          <div className='resumen'>Resumen</div>}

        <div>{loading && <h1>Cargando...</h1>}</div>

        {!loading && weatherData &&
          <TempActual tAhora={weatherData["current"]["temperature_2m"]}
            unidadTemp={!loading && weatherData && weatherData["current_units"]["temperature_2m"]} />}

        {!loading && weatherData &&
          <TempHora horas={weatherData["hourly"]["time"]} tempHoras={weatherData["hourly"]["temperature_2m"]}
            horaAct={weatherData["current"]["time"]} />}

        {!loading && weatherData &&
          <Humedad humedad={weatherData["hourly"]["relativehumidity_2m"]} />}

        {!loading && weatherData && <IndiceUV uv={weatherData["daily"]["uv_index_max"]} />}

        {!loading && weatherData && <Viento vientoMax={weatherData["current"]["windspeed_10m"]}
          unidadViento={weatherData["current_units"]["windspeed_10m"]} />};

        {!loading && weatherData &&
          <AmanecerPuesta amanecer={weatherData["daily"]["sunrise"]} puesta={weatherData["daily"]["sunset"]} />}

        {!loading && weatherData &&
          <MaxMin max={weatherData["daily"]["temperature_2m_max"]} min={weatherData["daily"]["temperature_2m_min"]} />}

        {!loading && weatherData && <Visibilidad visibilidad={weatherData["hourly"]["visibility"]} />}

        {!loading && <CalidadAire calidad={calidad} />}

      </div>

    </div>
  );
}

export default App;
