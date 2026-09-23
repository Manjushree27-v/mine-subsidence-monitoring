import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function SensorChart({ data, dataKey, title, unit }) {
  const chartData = Array.isArray(data) ? data : [];

  return (
    <div className="chart-card">

      <div className="chart-header">
        <span>{title}</span>
        <small>{unit}</small>
      </div>

      <div className="chart-container">

        {chartData.length === 0 ? (

          <div className="no-data">
            No sensor data available
          </div>

        ) : (

          <ResponsiveContainer width="100%" height={220}>

            <LineChart
              data={chartData}
              margin={{
                top: 10,
                right: 15,
                left: 0,
                bottom: 5
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#d9e2ec"
              />

              <XAxis
                dataKey="time"
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#cbd5e1" }}
              />

              <YAxis
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={{ stroke: "#cbd5e1" }}
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey={dataKey}
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: "#f59e0b"
                }}
                activeDot={{
                  r: 6
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        )}

      </div>

    </div>
  );
}

export default SensorChart;