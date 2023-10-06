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

function App() {
  return (
    <div className="App">
      <div className="weather-container">
        <div className='titulo'>Hoy</div>
        <div className='resumen'>Resumen</div>
        <TempActual />
        <TempHora />
        <Humedad valor={85}/>
        <IndiceUV />
        <Viento />
        <AmanecerPuesta />
        <MaxMin />
        <Visibilidad />
        <CalidadAire />       
      </div>
    </div>
  );
}

export default App;
