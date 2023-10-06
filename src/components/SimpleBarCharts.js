import React from 'react'
import { Bar, BarChart, ResponsiveContainer,ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {hora: "08:00", temperatura: -10},
    {hora: "09:00", temperatura: 25},
    {hora: "10:00", temperatura: 15},
    {hora: "11:00", temperatura: 35},
    {hora: "12:00", temperatura: 12},
    {hora: "13:00", temperatura: 30},
    {hora: "14:00", temperatura: 15},
]

const SimpleBarCharts = () => {
  return (
    <ResponsiveContainer width="100%" aspect={9}>
        <BarChart 
                 data={data}
                 width={80}
                 height={80}
                 margin={{
                     top:15,
                     right:150,
                     left:150,
                     bottom:15
                 }}
                 barSize={30}      
        >
        <XAxis dataKey="hora"/>
        <YAxis />
        <Tooltip />
        <Bar dataKey="temperatura" fill="#6b48ff"/>
        <ReferenceLine y={0}  />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default SimpleBarCharts