import { ResponsiveContainer, AreaChart, Area,
        XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Chart = ({ data, chartName, areaDataKey, color }) => {
    return (
        <ResponsiveContainer width="90%" height="80%" minHeight={300} minWidth={280}>
            <AreaChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                    name={chartName}
                    type="monotone"
                    dataKey={areaDataKey}
                    stroke={color}
                    fill={color}
                    fillOpacity={0.8}
                    activeDot={{ r: 8 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default Chart;