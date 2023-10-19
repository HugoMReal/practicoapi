function Visibilidad({ visibilidad, horaAct }) {

    let actual = horaAct;
    let actualCortada = actual.split("T");
    let posicion = actualCortada[1].split(":");

    let min = visibilidad[Number(posicion[0])] / 1000;

    return (
        <div className="visibilidad">
            <h4>Visibilidad</h4>
            <p>{min} km</p>
        </div>
    )
}

export default Visibilidad;