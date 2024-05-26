import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./PieChartBox.scss"

const data = [
    { name: 'mobaile', value: 400 , color : '#0088FE'},
    { name: 'desktop', value: 300 , color : '#00C49F'},
    { name: 'laptop', value: 300 , color :  '#FFBB28'},
    { name: 'tablet', value: 200 , color : '#FF8042'},
  ];



  


const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>
معیارات مرجع
      </h1>

      <div className="chart">
      <ResponsiveContainer width="99%" height={300}>
        <PieChart >
            <Tooltip contentStyle={{backgroundColor:"white" , borderRadius:"5px"}} />
          <Pie
            data={data}
            // cx="50%"
            // cy="50%"
            labelLine={false}
            innerRadius={"70%"}
            outerRadius={"90%"}
            // fill="#8884d8"
            dataKey="value"
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color } />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((opt) => (
            <div className="option" key={opt.name}>
                <div className="title">
                    <div className="dot" style={{backgroundColor:`${opt.color}`}} />
                    <span> {opt.name} </span>
                </div>
                <span> {opt.value} </span>
            </div>
        ))}
      </div>

    </div>
  )
}

export default PieChartBox
