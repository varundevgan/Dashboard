import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const data = [
  { month: 'Jan', uv: 24000, pv: 18000 },
  { month: 'Feb', uv: 13000, pv: 22000 },
  { month: 'Mar', uv: 32000, pv: 15000 },
  { month: 'Apr', uv: 50000, pv: 30000 },
  { month: 'May', uv: 65000, pv: 50000 },
  { month: 'Jun', uv: 125000, pv: 100000 },
  { month: 'Jul', uv: 160000, pv: 125000 },
  { month: 'Aug', uv: 180000, pv: 95000 },
  { month: 'Sep', uv: 140000, pv: 75000 },
  { month: 'Oct', uv: 200000, pv: 85000 },
  { month: 'Nov', uv: 220000, pv: 70000 },
  { month: 'Dec', uv: 250000, pv: 95000 },
];


const LineCharts = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#0e1a3a',
        color: '#fff',
        padding: '12px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
      }}>
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>${(payload[0].value / 1000).toFixed(1)}k</p>
        <p style={{ color: '#4ade80', fontSize: '12px' }}>12.5% ↑</p>
        <p style={{ fontSize: '12px', color: '#ccc' }}>June 21, 2023</p>
      </div>
    );
  }
  return null;
};

const CustomChart = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c084fc" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#c084fc" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.1}/>
            </linearGradient>
          </defs>

          <CartesianGrid stroke="rgba(255,255,255,0.1)" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: "#cbd5e1" }} />
          <YAxis tick={{ fill: "#cbd5e1" }} />
          <Tooltip content={<LineCharts />} />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#c084fc"
            fill="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#38bdf8"
            fill="url(#colorPv)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomChart;
