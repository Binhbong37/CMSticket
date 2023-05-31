import { PieChart as Piech, Pie, Cell, } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },

];

const COLORS = ["#4F75FF", "#FF8A48"];
const NAME = ['Vé đã sử dụng', 'Vé chưa sử dụng']
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  console.log(percent)

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fill="white"
    >
      {1000}
    </text>
  );
};
const PieChart = () => {
  return (
    <div className="pie-note">
      <div className="pie">
        <Piech width={800} height={400}>

          <Pie
            data={data}
            cx={300}
            cy={200}
            innerRadius={50}
            outerRadius={100}
            label={renderCustomizedLabel}
            labelLine={false}
            fill="#8884d8"
            paddingAngle={-10}
            dataKey="value"

          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {/*  */}

          <Pie
            data={data}
            cx={650}
            cy={200}
            startAngle={0}
            innerRadius={50}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

        </Piech>
      </div>
      <div className="note">
        {COLORS.map((color, i) => {
          return (
            <div key={i} className="group-note">
              <div style={{ background: `${color}` }} className="notePie"></div>
              <p>{NAME[i]}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default PieChart