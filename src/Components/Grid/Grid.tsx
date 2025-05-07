import {useContext, useMemo} from 'react';
import {ChartContext } from '../../Provider/ChartProvider';

const Grid = () =>{
    const context = useContext(ChartContext);

    if(!context) {throw new Error('Grid can only be used with a provided Cotext')}

    const [
        data,
        height,
        width,
        xScale,
        yScale,
        margin,
    ] = [
        context.data,
        context.height,
        context.width,
        context.xScale,
        context.yScale,
        context.margin,
    ]
   
    const xTicks: any[] =  useMemo(()=>xScale.ticks(),[xScale]);
    const yTicks: any[] = useMemo(()=>yScale.ticks(),[yScale]);

    console.log(xTicks, 'xTicks', yTicks, 'yTicks');

    return(
        <g className = 'grid-group'>
            {yTicks.map(d=>(<line   x1={margin.left} 
                                    x2={width - margin.right}
                                    y1={yScale(d)}
                                    y2={yScale(d)}
                                    stroke={'lightgrey'}
                                    strokeDasharray={'5 5'} />))}
            
            {xTicks.map(d=>(<line   x1={xScale(d)} 
                                    x2={xScale(d)}
                                    y1={height - margin.bottom}
                                    y2={margin.top}
                                    stroke={'lightgrey'}
                                    strokeDasharray={'5 5'} />))}

        </g>
    )
}

export default Grid;