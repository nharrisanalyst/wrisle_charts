//XY CHART 
// example data =[
//     {
//         xvalue:number,
//         yValue:number,
//         category?:color 
//     }
// ]
import {useEffect, useRef} from 'react';
import {Margin, chartMargin, chartHeight, chartWidth} from '../../Constents/ChartConstents';
import {scaleLinear} from 'd3-scale';
import {select} from 'd3-selection';
import {max} from 'd3-array';
import {axisBottom, axisLeft} from 'd3-axis';



type XYChartProps<T> = {
       data: T[];
       xAccessor:(d:T)=>number;
       yAccesor:(d:T)=>number;
       colorAccesor?:(d:T)=>string;
       title?:string;
       height?:number;
       width?:number;
       margin?:Margin;
       xTitle?:string;
       yTitle?:string;

}


const XYChart= <T,>({
    data,
    xAccessor,
    yAccesor,
    colorAccesor,
    title="",
    height=chartHeight,
    width=chartWidth,
    margin=chartMargin,
    xTitle="",
    ytitle=""

}:XYChartProps<T>) =>{
    console.log(max(data,yAccesor))
   //deminsions
   const gx = useRef<SVGSVGElement|null>(null);
   const gy = useRef<SVGSVGElement|null>(null);
   //xscales 
   const xScale = scaleLinear([0,max(data, xAccessor)], [margin.left, width-margin.right]);
   const yScale = scaleLinear([0, max(data,yAccesor)], [height - margin.bottom, margin.top]);
   //axis 
    useEffect(()=>void select(gx.current).call(axisBottom(xScale)),[gx,xScale]);
    useEffect(()=> void select(gy.current).call(axisLeft(yScale)),[gy,yScale]);

    return(
       <svg height={height} width={width}>
            <g ref={gx} transform={`translate(0,${height-margin.bottom})`} />
            <g ref = {gy} transform={`translate(${margin.left},0)`} />
            <g fill='grey'>
            {data.map((d,i)=>(<circle key={i} cx={xScale(xAccessor(d))} cy={yScale(yAccesor(d))} r="2.5"/>))}
            </g>
       </svg>
    )
}

export default XYChart;