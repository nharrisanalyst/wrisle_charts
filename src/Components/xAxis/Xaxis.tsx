import {ReactHTMLElement, useContext, useEffect, useRef} from 'react';
import {ChartContext } from '../../Provider/ChartProvider';
import {axisBottom} from 'd3-axis';
import {select} from 'd3-selection';


const xAxis = () =>{
    const context = useContext(ChartContext);
    const gx = useRef<HTMLElement | null>(null);

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
      select(gx.current).call(axisBottom(xScale))
    }, [data, xScale])

    return(
        <>
            <g ref={gx} transform={`translate(0, ${height-margin.bottom})`} />
        </>
    )
}

export default xAxis;