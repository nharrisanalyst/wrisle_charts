import { useContext, useEffect, useRef} from 'react';
import {ChartContext } from '../../Provider/ChartProvider';
import {axisLeft} from 'd3-axis';
import {select} from 'd3-selection';

type CircleXYProp = {
    r?:number;
    strokeWidth?:number;
    fill?:string;
    stroke?:string|null;
}


const CircleXY =({r=2, strokeWidth=0, fill='grey', stroke=null}) =>{
    const context = useContext(ChartContext);
    if(!context) {throw new Error('Grid can only be used with a provided Cotext')}

    const [
        data,
        height,
        width,
        yAccesor,
        xAccesor,
        xScale,
        yScale,
        margin,
        scaleType
    ] = [
        context.data,
        context.height,
        context.width,
        context.yAccesor,
        context.xAccesor,
        context.xScale,
        context.yScale,
        context.margin,
        context.scaleType
    ]
    

    return (
        <g className='xy-chart-circles'>
          {data.map((d,i)=> (<circle key={i} cx={xScale(xAccesor(d))} 
                                    cy={yScale(yAccesor(d))}
                                    fill={fill}
                                     r={r}
                                     strokeWidth={strokeWidth}
                                     stroke={stroke} />))}
        </g>
    )
}


export default CircleXY;