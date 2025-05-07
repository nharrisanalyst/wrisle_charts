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
        yScale,
        margin,
    ] = [
        context.data,
        context.yScale,
        context.margin,
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