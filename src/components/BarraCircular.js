import React from 'react';
import { PieChart, Pie, Cell} from 'recharts';

let value = 90;
let resto = 100 - value;

const data = [
    { name: 'Group A', value: (value) },
    { name: 'Group B', value: (resto) },

];
const COLORS = ['#0088FE', ' rgba(255, 255, 255, 0.8)'];
const BarraCircular = () => {
    return (      
        <PieChart className='barra' width={300} height={300} >
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={1}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Pie>
           
            </Pie>

        </PieChart>
       

    );
}
export default BarraCircular
