import React, { useState } from "react";

function Menu({ transData }) {

    const lineas = transData;

    //const lineasNacionales = lineas.filter((l,index) => lineas.indexOf(l.route_short_name) === index);


    const lineasSinDuplicados = Array.from(new Set(lineas.map(l => l.route_short_name))).map(route_short_name => {
        return lineas.find(l => l.route_short_name === route_short_name);
    });


    const [linea, setLinea] = useState(-1);

    const handlerCargarLineas = function (e) {

        const opcion = e.target.value;

        setLinea(opcion);
    }


    return (
        <div className="linea">
            <select onClick={handlerCargarLineas}>
                <option value={-1} disabled>Seleccione una opción:</option>
                {
                    lineasSinDuplicados.map((linea) => (
                        <option value={linea.route_short_name}>{linea.route_short_name}</option>
                    ))
                }
            </select>
            <span>{linea}</span>
        </div>
    );

}

export default Menu;