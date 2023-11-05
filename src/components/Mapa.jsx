import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

function Mapa({ transData }) {

    const transportes = transData;
    const sumaLongitud = transportes.reduce((total, transportes) => total + transportes.longitude, 0);
    const sumaLatitud = transportes.reduce((total, transportes) => total + transportes.latitude, 0);
    const promedioLongitud = sumaLongitud / transportes.length;
    const promedioLatitud = sumaLatitud / transportes.length;

    const quitarLetras = (cadena) => {
        return (cadena.replace(/[^0-9]/g, ''));
    };
    
    const numLinea = quitarLetras(transportes[0]["route_short_name"]);
    const url = `https://www.xcolectivo.com.ar/imagenes/colectivos/identificador/linea${numLinea}.jpg`

    const imgIcono = new Icon({
            iconUrl: url,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        })
    
        console.log ()

    return (
        <div>
            <MapContainer center={[promedioLatitud, promedioLongitud]} zoom={9.5} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {transportes.map(colectivo =>
                    <Marker key={colectivo.id} 
                    position={[colectivo["latitude"], colectivo["longitude"]]}
                    icon={imgIcono}>,
                        <Popup>Línea: {colectivo["route_short_name"]}. <br /> Destino: {colectivo["trip_headsign"]}.<br />
                            Velocidad: {colectivo["speed"]} km/h.</Popup>
                    </Marker>)}
            </MapContainer>
        </div>


    )
}

export default Mapa;




