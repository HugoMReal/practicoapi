function AmanecerPuesta({ amanecer, puesta }) {

//construyo un array separando por la letra T//

  let amanece = amanecer[0].split('T');
  let laPuesta = puesta[0].split('T');

  let horaAmanecer = '';
  let horaPuesta= '';

//en la posicion 0 queda la fecha y el 1 la hora//

  const separar = () => {
    horaAmanecer = amanece[1];
    horaPuesta = laPuesta[1];
  }

  separar();


  return (
    <div className="amanecer">
      <table>
        <tr>
          <td>Amanecer</td>
          <td>{(horaAmanecer)}</td>
        </tr>
        <tr>
          <td>Puesta</td>
          <td>{(horaPuesta)}</td>
        </tr>
      </table>
    </div>
  )
}

export default AmanecerPuesta;