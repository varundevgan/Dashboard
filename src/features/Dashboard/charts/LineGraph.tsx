import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '12 AM', value: 0 },
  { time: '2 AM', value: 70 },
  { time: '4 AM', value: 40 },
  { time: '6 AM', value: 90 },
  { time: '8 AM', value: 50 },
  { time: '10 AM', value: 80 },
  { time: '12 PM', value: 120 },
  { time: '2 PM', value: 300 },
  { time: '4 PM', value: 80 },
  { time: '6 PM', value: 130 },
  { time: '8 PM', value: 70 },
  { time: '11 PM', value: 20 },
];

const CustomLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="time" stroke="#A3A3A3" />
        <YAxis stroke="#A3A3A3" />
        <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: 'none' }} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#D946EF"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
