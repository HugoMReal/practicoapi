import { useState } from 'react';

const Ciudad = () => {

    const [ciudad, setCiudad] = useState('');
    const [opciones, setOpciones] = useState([]);
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);

    const API_URL = 'https://geocoding-api.open-meteo.com/v1/search';

    const handleInputChange = (e) => {
        const Texto = e.target.value;
        setCiudad(Texto);
        fetch(`${API_URL}?name=${Texto}&count=10&language=es&format=json`)
            .then((response) => response.json())
            .then((data) => {
                setOpciones(data.results);
            })
            .catch((error) => console.error(error));
    };

    const handleCitySelect = (opcionSeleccionada) => {
        const seleccion = opcionSeleccionada ? opcionSeleccionada.value : null;
        const ciudad = opciones.find((ciudad) => ciudad.value === seleccion);
        setCiudadSeleccionada(ciudad);
        setCiudad(null);
        setOpciones(null);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Escribe una ciudad"
                value={ciudad}
                onChange={handleInputChange}
            />

            <ul>
                {opciones && opciones.map((ciudad) => (
                    <li key={ciudad.id} onClick={() => handleCitySelect(ciudad)}>
                        {ciudad.name}, {ciudad.admin1}, {ciudad.country}
                    </li>
                ))}
            </ul>

            {ciudadSeleccionada && (
                <div>
                    <h2>{ciudadSeleccionada.name}</h2>
                    <p>Latitud: {ciudadSeleccionada.latitude}</p>
                    <p>Longitud: {ciudadSeleccionada.longitude}</p>
                </div>
            )}
        </div>
    );
};


export default Ciudad;







