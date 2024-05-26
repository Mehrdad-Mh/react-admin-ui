import { Link } from "react-router-dom"
import {  Legend, Line, LineChart, ResponsiveContainer, Tooltip} from "recharts"
import "./ChartBox.scss"



type Props = {
    color : string,
    title : string,
    icon:string,
    dataKey : string,
    number : number | string,
    percentage : number,
    chartData : object[]
}




const ChartBox = (props:Props) => {


  
  return (
    <div className="chartbox">
      <div className="boxInfo">
        <div className="title">
            <img src={props.icon} alt="" />
            <span> {props.title} </span>
        </div>

            <h2 className="bignum"> {props.number} </h2>
       
            <Link to="/" style={{color : `${props.color}`}} className="viewAll">  نمایش همه   </Link>

     </div>
     <div className="chartInfo">
            <div className="chart"> 
            
            <ResponsiveContainer width="100%" height="100%">
        <LineChart
        //   width={300}
        //   height={100}
          data={props.chartData}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid/> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip contentStyle={{background:"transparent" , border:"none"}}
          labelStyle={{display : "none"}}
          position={{x : 10 , y:-30}}
          />
       <Legend />
          <Line dot={false} type="monotone" dataKey={props.dataKey} stroke={props.color} activeDot={{ r: 8 }} />
          {/* <Line dot={false} type="monotone" dataKey={props.dataKey} stroke={props.color} /> */}
        </LineChart>
      </ResponsiveContainer>
            
             </div>
            <div className="charttext"> 
            <span className="percent" style={{color : props.percentage   <= 0 ? "tomato" : "green" }}>  {props.percentage}  </span>
            <span className="duration">  این ماه  </span>
             </div>
     </div>


    </div>
  )
}

export default ChartBox
