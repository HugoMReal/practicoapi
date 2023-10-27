import { useState } from 'react';
import { useEffect } from "react";
import Menu from './Menu';
import Mapa from './Mapa';
import listado from './listadoLineas.json';

function Transporte() {

    const [transporteData, setTransporteData] = useState(null);
    const [loading1, setLoading1] = useState(true);
    const [linea, setLinea] = useState(1468);
    const lineas = listado;

    const Data = (idRuta) => {

        const urlApi = `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?route_id=${idRuta}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`

        fetch(urlApi)
            .then(resp => resp.json()).then((trans) => {
                setTransporteData(trans);
                setLoading1(false);
            }).catch((ex) => {
                console.error(ex);
            });
    }
    useEffect(() => {
        Data(linea)
        const interval = setInterval(() => {
            Data(linea)
        }, 31000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      setTimeout(() => {
        Data(linea)
      },31000);   
     
    }, [])      


useEffect(() => {
    Data(linea)
}, [linea]);


const transportes = transporteData;

const handlerCargarLineas = function (e) {
    const opcion = e.target.value;
    setLinea(opcion);
}

console.log ("mapa",transportes);

return (
    <div>
        {loading1 && <h1>Cargando...</h1>}
        <div className="linea">
            <select onClick={handlerCargarLineas}>
                <option value={-1} disabled>Seleccione una opción:</option>
                {
                    lineas.map((linea) => (
                        <option value={linea.route_id}>{linea.route_short_name}</option>
                    ))
                }
            </select>
            <span>{linea}</span>
        </div>

        <div>
            {!loading1 && transporteData && <Mapa transData={transportes} />}
        </div>
    </div>

)
}

export default Transporte;


