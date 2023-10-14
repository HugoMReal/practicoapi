function MaxMin({max, min}) {
    return (
        <div className="maxmin">

            <h4>Máxima</h4>

            <p>{max}°C</p>

            <h4>Mínima</h4> 
                    
            <p>{min}°C</p>    
            
        </div>
    )
}

export default MaxMin;