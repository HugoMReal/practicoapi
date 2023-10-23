import './App.css';
import { useState } from 'react';
import { useEffect } from "react";
import Transporte from './components/Transporte';
import DashBoardClima from './components/DashBoardClima';
import datos from './api/api.json';


function App() {
  const transporteData = datos;
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  //const [transporteData, setTransporteData] = useState(null);
  //const [loading1, setLoading1] = useState(true);

  console.log(weatherData)
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

  // useEffect(() => {
  //   fetch(
  //     'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
  //     .then(resp => resp.json()).then((trans) => {
  //       setTransporteData(trans);
  //       setLoading1(false);
  //     }).catch((ex) => {
  //       console.error(ex);
  //     });
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetch(
  //       'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6')
  //       .then(resp => resp.json()).then((trans) => {
  //         setTransporteData(trans);
  //         setLoading1(false);
  //       }).catch((ex) => {
  //         console.error(ex);
  //       });
  //   }, 31000);
  //   return () => clearInterval(interval); }, []);

    return (

    <div className="App">
      <div className="weather-container">
        {!loading && weatherData && <DashBoardClima weatherData={weatherData} />}
        {loading && <h1>Cargando...</h1>}
      </div>
      <div className="bus-container">
        <Transporte transporteData ={transporteData}/>
        {loading && <h1>Cargando...</h1>}
      </div>
    </div>
  );
}

export default App;
