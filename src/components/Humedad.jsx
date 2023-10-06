import BarraCircular from "./BarraCircular";

function Humedad({valor}) {
    return (
        <div className="humedad" >
            <h4>Humedad</h4>            
            <BarraCircular hume={valor} />
            <h4>{valor}</h4>
        </div>
    )
}

export default Humedad;