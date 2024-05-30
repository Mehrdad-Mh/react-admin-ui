
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./UserSingleChart.scss"




const UserSingleChart = () => {
  return (
    <div className="userSingleChart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
         
         
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
         
          <XAxis dataKey={props.chart?.dataKeys} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UserSingleChart
