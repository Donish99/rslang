import {
    ResponsiveContainer, ComposedChart, Area,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line
} from "recharts";

const Chart = ({ data, chartName, areaDataKey, color, id }) => {
    return (
        <ResponsiveContainer width="90%" height="80%" minHeight={300} minWidth={280}>
            <ComposedChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5
                }}
            >
                <defs>
                    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={color} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Line
                    name=" "
                    type="monotone"
                    // unit="M"
                    strokeLinecap="round"
                    strokeWidth={5}
                    dataKey={areaDataKey}
                    stroke={color}
                    dot={false}
                    legendType="none"
                    // activeDot={false}
                /> */}
                <Area
                    name={chartName}
                    type="monotone"
                    dataKey={areaDataKey}
                    stroke={color}
                    fill={`url(#${id})`}
                    fillOpacity={1}
                    activeDot={{ r: 8 }}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

export default Chart;