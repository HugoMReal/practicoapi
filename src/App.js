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

function App() {
  const tAhora = data["current_weather"]["temperature"];
  const unidadTemp = data["hourly_units"]["temperature_2m"];
  const horas = data["hourly"]["time"];
  const tempHoras = data ["hourly"]["temperature_2m"];
  const uv = data["daily"] ["uv_index_max"];
  const vientoMax = data["daily"] ["windspeed_10m_max"];
  const unidadViento = data["daily_units"]["windspeed_10m_max"];
  const amanecer = data["daily"]["sunrise"];
  const puesta = data["daily"]["sunset"];
  const max = data["daily"]["temperature_2m_max"];
  const min = data["daily"]["temperature_2m_min"];
  const visibilidad = data["hourly"]["visibility"];
  const humedad = data["hourly"]["relativehumidity_2m"];
  const calidad = data["hourly"]["european_aqi"];

  return (
    <div className="App">
      <div className="weather-container">
        <div className='titulo'>Hoy</div>
        <div className='resumen'>Resumen</div>
        <TempActual tAhora={tAhora} unidadTemp={unidadTemp} />
        <TempHora horas={horas} tempHoras = {tempHoras}/>
        <Humedad humedad={humedad} />
        <IndiceUV uv= {uv}/>
        <Viento vientoMax ={vientoMax} unidadViento = {unidadViento} />
        <AmanecerPuesta amanecer = {amanecer} puesta = {puesta}/>
        <MaxMin max={max} min={min}/>
        <Visibilidad visibilidad ={visibilidad}/>
        <CalidadAire calidad={calidad}/>
      </div>
    </div>
  );
}

export default App;
