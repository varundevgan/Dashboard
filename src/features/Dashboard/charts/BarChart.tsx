import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    {time : '12AM', uv : 500, pv : 400},
    {time : '1AM', uv : 500, pv : 300},
    {time : '2AM', uv : 300, pv : 600},
    {time : '3AM', uv : 500, pv : 300},
    {time : '4AM', uv : 600, pv : 500},
    {time : '5AM', uv : 500, pv : 300},
    {time : '6AM', uv : 500, pv : 500},
    {time : '7AM', uv : 500, pv : 600},
    {time : '8AM', uv : 300, pv : 400},
    {time : '9AM', uv : 400, pv : 600},
    {time : '10AM', uv : 400, pv : 300},
    {time : '11AM', uv : 500, pv : 400},
]


// const customTooltip = ()=>{

// }

const BarCharts = () => {
  return (
    <div style={{width: '90%', height: 110}}>
      <ResponsiveContainer>
            <BarChart
                data={data}
            >
                <XAxis
                    dataKey= 'time' 
                    stroke='#94a3b8'
                    tick={{ fill: '#CBD5E1', fontSize: 12}}
                    interval={0}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(time)=>{
                        const visibleTime = ['12AM', '3AM', '8AM', '11AM']
                        return visibleTime.includes(time) ? time : ' '
                    }}
                 />
                < YAxis hide/>
                <Bar dataKey = 'uv' fill='rgb(203, 60, 255)' barSize={5} radius={[6, 6, 0 ,0]} />
                <Bar radius={[6, 6, 0 ,0]} barSize={5} dataKey = 'pv' fill='rgb(0, 194, 255)' />
            </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarCharts
