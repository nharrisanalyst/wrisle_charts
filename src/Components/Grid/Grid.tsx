import {useContext, useMemo} from 'react';
import {ChartContext, ChartContextType} from '../../Provider/ChartProvider'

const Grid = () =>{
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
   
    const xTicks: any[] =  useMemo(()=>xScale.ticks(),[xScale]);
    const yTicks: any[] = useMemo(()=>yScale.ticks(),[yScale]);

    return(
        <g className = 'grid-group'>
            {xTicks.map(d=>(<line   x1={margin.left} 
                                    x2={width - margin.right}
                                    y1={yScale(d)}
                                    y2={yScale(d)}
                                    stroke={'grey'}
                                    strokeDasharray={'5 5 5'} />))}
            
            {yTicks.map(d=>(<line   x1={xScale(d)} 
                                    x2={xScale(d)}
                                    y1={height}
                                    y2={margin.bottom}
                                    stroke={'grey'}
                                    strokeDasharray={'5 5 5'} />))}

        </g>
    )
}

export default Grid;