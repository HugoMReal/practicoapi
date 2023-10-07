function Visibilidad({visibilidad}) {
let min = Math.min(...visibilidad)/1000;

console.log(min);

    return (
        <div className="visibilidad">
            <h4>Visibilidad minima</h4>
            <p>{min} km</p>
        </div>
    )
}

export default Visibilidad;