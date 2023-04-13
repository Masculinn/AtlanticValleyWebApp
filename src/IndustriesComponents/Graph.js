import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";


export default function Graph(val) {
    const data = [
        { 
            name: `${val.name1}`,
            value: val.val1, 
            worth: val.worth1
        },
        { 
            name: `${val.name2}`, 
            value: val.val2, 
            worth: val.worth2
        }
      ];

      const [activeIndex, setActiveIndex] = useState(0);
      const onPieEnter = useCallback(
        (_, index) => {
          setActiveIndex(index);
        },
        [setActiveIndex]
      );

      const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          startAngle,
          endAngle,
          fill,
          payload,
          percent,
          worth
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? "start" : "end";
      
        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
              {payload.name}
            </text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={'#475569'}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill="#ffffff"
            >{`$ ${worth}M`}</text>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              dy={18}
              textAnchor={textAnchor}
              fill="#ffffff"
            >
              {`(Rate ${(percent * 100).toFixed(0)}%)`}
            </text>
          </g>
        );
      };
      
      
    return (
        <div className='flex w-full h-screen bg-slate-950 bg-opacity-100 shadow-2xl'>
        <div className='w-1/2 flex justify-center items-center'>
          <center>
          <PieChart width={400} height={400} className=' lg:scale-150 scale-100' id='section_font'>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx={200}
              cy={200}
              innerRadius={70}
              outerRadius={80}
              fill="#FFFFFF"
              dataKey="value"
              onMouseEnter={onPieEnter}
              border="#000000"
            />
          </PieChart>  
          </center>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <h1 className='text-center lg:text-3xl md:text-4xl sm:text-3xl text-md text-white block tracking-tight' id='section_font'>
          <a href='https://www.statista.com/' className='text-slate-600 text-sm lg:text-lg md:text-md sm:text-sm' id='section_font'>-{val.link}-</a>
          <br />
            {val.header}
            <h3 className='text-center lg:text-lg md:text-4xl sm:text-3xl text-2xl tracking-tighter text-slate-600  font-light'>
            <br />
            {val.desc}
            </h3>
            </h1>  
        </div>
      </div>
    )
}