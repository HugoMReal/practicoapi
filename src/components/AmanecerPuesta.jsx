function AmanecerPuesta({ amanecer, puesta }) {

//construyo un array separando por la letra T//

  let amanece = amanecer[0].split('T');
  let laPuesta = puesta[0].split('T');

  let horaAmanecer = amanece[1];
  let horaPuesta= laPuesta[1];

//en la posicion 0 queda la fecha y el 1 la hora//

  const separar = () => {
    
    horaAmanecer = amanece[1];
    horaPuesta = laPuesta[1];
  }

  separar();


  return (

    <div className="amanecer">

        <h4>Amanecer</h4>
        <p>{(horaAmanecer)}</p>
        <h4>Puesta</h4>
        <p>{(horaPuesta)}</p>
        
      </div>
  )
}

export default AmanecerPuesta;