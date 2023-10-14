import React from 'react';
import { Bar, BarChart, ResponsiveContainer, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';

const TempHora = ({ horas, tempHoras, horaAct }) => {

    const horarios = horas;
    const temperatura = tempHoras;

    //usar esto en demas componentes para obtener valores de ahora y maximos o minimos

    let actual = horaAct;
    let actualCortada = actual.split(":");
    let horaRedondeada = actualCortada[0] + ":00";
    let posicion = horarios.indexOf(horaRedondeada);

    const data = [
        { hora: (horarios[posicion].split("T")[1]), temperatura: (temperatura[posicion]) },
        { hora: (horarios[posicion + 1].split("T")[1]), temperatura: (temperatura[posicion + 1]) },
        { hora: (horarios[posicion + 2].split("T")[1]), temperatura: (temperatura[posicion + 2]) },
        { hora: (horarios[posicion + 3].split("T")[1]), temperatura: (temperatura[posicion + 3]) },
        { hora: (horarios[posicion + 4].split("T")[1]), temperatura: (temperatura[posicion + 4]) },
        { hora: (horarios[posicion + 5].split("T")[1]), temperatura: (temperatura[posicion + 5]) },
        { hora: (horarios[posicion + 6].split("T")[1]), temperatura: (temperatura[posicion + 6]) },
    ]
    return (
        <div className="tempDia" >
            <ResponsiveContainer width="100%" aspect={9}>
                <BarChart
                    data={data}
                    width={80}
                    height={80}
                    margin={{
                        top: 15,
                        right: 150,
                        left: 150,
                        bottom: 15
                    }}
                    barSize={30}
                >
                    <XAxis dataKey="hora" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="temperatura" fill="#6b48ff" />
                    <ReferenceLine y={0} />
                </BarChart>
            </ResponsiveContainer>
        </div >)
}
export default TempHora;

