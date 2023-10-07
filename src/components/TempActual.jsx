function TempActual({tAhora, unidadTemp}) {
    return (
        <div className="temp">
            <h4>Temperatura actual </h4>
            <p>{tAhora} {unidadTemp}</p>
        </div>)
}

export default TempActual;