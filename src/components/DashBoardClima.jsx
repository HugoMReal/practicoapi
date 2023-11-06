import TempActual from './TempActual';
import TempHora from './TempHora';
import Humedad from './Humedad';
import IndiceUV from './IndiceUV';
import Viento from './Viento';
import AmanecerPuesta from './AmanecerPuesta';
import MaxMin from './MaxMin';
import Visibilidad from './Visibilidad';
import CalidadAire from './CalidadAire';
import Ciudad from './Ciudad';


// function DashBoardClima({ weatherData }) {
//     const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);
function DashBoardClima({ weatherData, ciudadSeleccionada ,setCiudadSeleccionada }) {

    console.log(ciudadSeleccionada);
    return (
        <>
        <Ciudad ciudadSeleccionada={ciudadSeleccionada} setCiudadSeleccionada={setCiudadSeleccionada}/>
            <div className='ahora'>
                <TempActual tAhora={weatherData["current"]["temperature_2m"]}
                    unidadTemp={weatherData["current_units"]["temperature_2m"]} />
            </div>

            <div className='titulo'>Hoy
                <div className='tempHora'>
                    <TempHora horas={weatherData["hourly"]["time"]}
                        tempHoras={weatherData["hourly"]["temperature_2m"]}
                        horaAct={weatherData["current"]["time"]} />
                </div>
            </div>

            <div className='sol'>
                <AmanecerPuesta amanecer={weatherData["daily"]["sunrise"]}
                    puesta={weatherData["daily"]["sunset"]} />
            </div>

            <div className='resumen'>Resumen
                <div className='tarjetas'>
                    <div className='tarjeta'>
                        <Humedad humedad={weatherData["current"]["relativehumidity_2m"]} /></div>

                    <div className='tarjeta'>
                        <IndiceUV uv={weatherData["daily"]["uv_index_max"]} /></div>

                    <div className='tarjeta'>
                        <Viento vientoMax={weatherData["current"]["windspeed_10m"]}
                            unidadViento={weatherData["current_units"]["windspeed_10m"]} />;</div>

                    <div className='tarjeta'>
                        <MaxMin max={weatherData["daily"]["temperature_2m_max"]}
                            min={weatherData["daily"]["temperature_2m_min"]} /></div>

                    <div className='tarjeta'>
                        <Visibilidad visibilidad={weatherData["hourly"]["visibility"]}
                            horaAct={weatherData["current"]["time"]} /></div>

                    <div className='tarjeta'>
                        <CalidadAire ciudadSeleccionada = {ciudadSeleccionada} /> </div>

                </div>
            </div>
        </>
    );
}

export default DashBoardClima;