import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import datos from '../api/api.json';
import Menu from './Menu';

function Transporte() {

    const transportes = datos;
    const position = [-34.7, -58.68];
    const colectivos100 = transportes.slice(0,100);
    console.log(colectivos100);

    return (
        <div>
            <div>
                <Menu transData = {colectivos100}/>               
            </div>
            <div>
                <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {colectivos100.map(colectivo =>
                        <Marker key={colectivo.id} position={[colectivo["latitude"], colectivo["longitude"]]}>
                            ,   <Popup>
                                Línea: {colectivo["route_short_name"]}. <br /> Destino: {colectivo["trip_headsign"]}.
                            </Popup>
                        </Marker>)}
                </MapContainer>
            </div>
        </div>

    )
}

export default Transporte;


