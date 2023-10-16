import { useState } from 'react';
import { useEffect } from "react";

function CalidadAire() {

    const [weatherAqi, setWeatherAqi] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(
            'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-36.8927&longitude=-60.3225&current=european_aqi&timezone=America%2FSao_Paulo&forecast_days=1')
            .then(resp => resp.json()).then((aqi) => {
                setWeatherAqi(aqi);
                setLoading(false);
            }).catch((ex) => {
                console.error(ex);
            });
    }, [])

    return (
        <div className="calidad">
            <h4>Calidad del aire</h4>
            {!loading && weatherAqi && <p>{weatherAqi["current"]["european_aqi"]}</p>}
        </div>
    )
}

export default CalidadAire;