import React from 'react';
import { Bar, BarChart, ResponsiveContainer, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';

const TempHora = ({ horas, tempHoras }) => {

    const horarios = horas;
    const temperatura = tempHoras;
    console.log(temperatura);


    const data = [
        { hora: (horarios[0].split("T")[1]), temperatura: (temperatura[0]) },
        { hora: (horarios[1].split("T")[1]), temperatura: (temperatura[1]) },
        { hora: (horarios[2].split("T")[1]), temperatura: (temperatura[2]) },
        { hora: (horarios[3].split("T")[1]), temperatura: (temperatura[3]) },
        { hora: (horarios[4].split("T")[1]), temperatura: (temperatura[4]) },
        { hora: (horarios[5].split("T")[1]), temperatura: (temperatura[5]) },
        { hora: (horarios[6].split("T")[1]), temperatura: (temperatura[6]) },
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

