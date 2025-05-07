import { useContext, useEffect, useRef} from 'react';
import {ChartContext } from '../../Provider/ChartProvider';
import {axisLeft} from 'd3-axis';
import {select} from 'd3-selection';


const LeftAxis = () =>{
    const context = useContext(ChartContext);
    const gy = useRef<HTMLElement | null>(null);

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

    useEffect(()=>{
      select(gy.current).call(axisLeft(yScale))
    }, [data, yScale])

    return(
        <>
            <g ref={gy} transform={`translate(${margin.left}, 0)`} />
        </>
    )
}

export default LeftAxis;