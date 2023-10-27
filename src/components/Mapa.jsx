import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Mapa({ transData }) {

    const transportes = transData;
    const position = [-34.7, -58.68];
    //const colectivos100 = transportes.slice(0,100);  
    console.log ("en mapa", transportes);

    return (
        <div>
           <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {transportes.map(colectivo =>
                        <Marker key={colectivo.id} position={[colectivo["latitude"], colectivo["longitude"]]}>
                            ,   <Popup>
                                Línea: {colectivo["route_short_name"]}. <br /> Destino: {colectivo["trip_headsign"]}.
                            </Popup>
                        </Marker>)}
                </MapContainer>
            </div>
       

    )
}

export default Mapa;




