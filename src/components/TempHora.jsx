import React from 'react';
import { Bar, BarChart, ResponsiveContainer, ReferenceLine, Tooltip, XAxis, YAxis, Legend } from 'recharts';

const TempHora = ({ horas, tempHoras, horaAct }) => {

    const horarios = horas;
    const temperatura = tempHoras;

    //usar esto en demas componentes para obtener valores de ahora y maximos o minimos

    let actual = horaAct;
    let actualCortada = actual.split(":");
    let horaRedondeada = actualCortada[0] + ":00";
    let posicion = horarios.indexOf(horaRedondeada);

    let horasCortadas = horarios.slice(posicion);
    let temperaturasCortadas = temperatura.slice(posicion);

  const data = horasCortadas.map((x,i)=> ({
    hora: x.split("T")[1],
    Temperatura: temperaturasCortadas[i],
  }))

 
    
    return (
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data} width="100%" height="100%" barSize="2%" >
                    <XAxis dataKey="hora" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Temperatura" fill="#6b48ff" />
                    <ReferenceLine y={0} />
                    <Legend />
                </BarChart>
            </ResponsiveContainer>
        )
}
export default TempHora;

