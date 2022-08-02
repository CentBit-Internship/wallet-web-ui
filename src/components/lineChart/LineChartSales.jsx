import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    offlinesales: 100,
    onlinesales: 240,
  },
  {
    name: "Feb",
    offlinesales: 300,
    onlinesales: 918,
  },
  {
    name: "Mar",
    offlinesales: 200,
    onlinesales: 680,
  },
  {
    name: "Apr",
    offlinesales: 200,
    onlinesales: 390,
  },
  {
    name: "May",
    offlinesales: 189,
    onlinesales: 480,
  },
  {
    name: "Jun",
    offlinesales: 669,
    onlinesales: 380,
  },
  {
    name: "Jul",
    offlinesales: 890,
    onlinesales: 430,
  },
];

export const LineChartSales = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={2.5}>
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Legend verticalAlign="top" height={36} align="right" iconSize={10} iconType="circle"/>
          <CartesianGrid strokeDasharray="0" horizontal="true" vertical="" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} height={20} />
          <YAxis tickCount={6} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{backgroundColor: '#000', color: 'white'}} />

          <Line
            className="line-chart"
            name="offline sales"
            type="monotone"
            dataKey="offlinesales"
            dot={false}
            activeDot={{ r: 4, stroke: "#000", fill: "#000" }}
            stroke="#a88ed4"
            strokeWidth={5}
            // legendType="circle"
          />

          <Line
            name="online sales"
            type="monotone"
            dataKey="onlinesales"
            stroke="#b9e303"
            dot={false}
            activeDot={{ r: 4, stroke: "#000", fill: "#000" }}
            strokeWidth={5}
            // legendType="circle"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
