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
import { useState } from 'react';
import { useEffect } from "react";
import Transporte from './components/Transporte';

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

        <div className='ahora'>
          {!loading && weatherData && <TempActual tAhora={weatherData["current"]["temperature_2m"]}
            unidadTemp={!loading && weatherData && weatherData["current_units"]["temperature_2m"]} />}
        </div>


        <div className='titulo'>Hoy
          <div className='tempHora'>
            {!loading && weatherData &&
              <TempHora horas={weatherData["hourly"]["time"]} tempHoras={weatherData["hourly"]["temperature_2m"]}
                horaAct={weatherData["current"]["time"]} />}
          </div>
        </div>


        <div className='sol'>
          {!loading && weatherData &&
            <AmanecerPuesta amanecer={weatherData["daily"]["sunrise"]} puesta={weatherData["daily"]["sunset"]} />}
        </div>

        {!loading && weatherData && <div className='resumen'>Resumen
          <div className='tarjetas'>
            <div className='tarjeta'>
              {!loading && weatherData && <Humedad humedad={weatherData["current"]["relativehumidity_2m"]} />}</div>
            <div className='tarjeta'>
              {!loading && weatherData && <IndiceUV uv={weatherData["daily"]["uv_index_max"]} />}</div>
            <div className='tarjeta'>{!loading && weatherData && <Viento vientoMax={weatherData["current"]["windspeed_10m"]}
              unidadViento={weatherData["current_units"]["windspeed_10m"]} />};     </div>
            <div className='tarjeta'>{!loading && weatherData &&
              <MaxMin max={weatherData["daily"]["temperature_2m_max"]} min={weatherData["daily"]["temperature_2m_min"]} />}</div>
            <div className='tarjeta'>{!loading && weatherData && <Visibilidad visibilidad={weatherData["hourly"]["visibility"]} horaAct={weatherData["current"]["time"]} />}</div>
            <div className='tarjeta'>{!loading && <CalidadAire />} </div>
          </div>
        </div>}
        <div>{loading && <h1>Cargando...</h1>}</div>

      </div>

      <div className="bus-container">
        <Transporte/>

      </div>



    </div>
  );
}

export default App;
