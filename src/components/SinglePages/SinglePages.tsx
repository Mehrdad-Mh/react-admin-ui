import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


import "./SinglePages.scss";

type Props = {
  id: number;
  img?: string; //? mark means its not required
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const SinglePages = (props : Props) => {
  return (
    <div className="singlepages">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src="" alt="" />}
            <h2> {props.title} </h2>
            <button> اضافه کردن مخاطب </button>
          </div>
          <div className="topUserDetails">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle"> {item[0]}: </span>
                <span className="itemValue"> {item[1]}: </span>
              </div>
            ))}
          </div>

          <div className="chart">
            {props.chart && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={props.chart.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey={props.chart.dataKeys} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {props.chart.dataKeys.map((item) => (
                    <Line
                      type="monotone"
                      dataKey={item.name}
                      stroke={item.color}
                      activeDot={{ r: 8 }}
                    />
                  ))}
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
      <div className="activities">
        <h2> آخرین فعالیت ها </h2>

        {props.activities && (
          <ul>
            {props.activities.map((activ) => (
 <li key={activ.text}>
 <div>
   <p>{activ.text} </p>
   <time> {activ.time}</time>
 </div>
</li>
            ))
           
}
          </ul>
        )}
      </div>

      <div />
    </div>
  );
};

export default SinglePages;
