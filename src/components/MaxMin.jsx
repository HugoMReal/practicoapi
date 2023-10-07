function MaxMin({max, min}) {
    return (
        <div className="maxmin">
            <table>
                <tr>
                    <td>Máxima</td>
                    <td>Mínima</td>
                </tr>
                <tr>
                    <td>{max}°C</td>
                    <td>{min}°C</td>
                </tr>
            </table>
        </div>
    )
}

export default MaxMin;