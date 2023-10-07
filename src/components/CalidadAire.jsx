function CalidadAire({calidad}) {
    let min = Math.min(...calidad);

    return (
        <div className="calidad">
            <h4>Calidad del aire minima</h4>
            <p>{min}</p>
        </div>
    )
}

export default CalidadAire;