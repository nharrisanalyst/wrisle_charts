//XY CHART 
// example data =[
//     {
//         xvalue:number,
//         yValue:number,
//         category?:color 
//     }
// ]
import {Margin, chartMargin, chartHeight, chartWidth} from '../../Constents/ChartConstents';


type XYChartProps<T> = {
       data: T[];
       xAccessor:(d:T)=>number|string;
       yAccesor:(d:T)=>number|string;
       colorAccesor?:(d:T)=>string;
       title?:string;
       height?:number;
       width?:number;
       margin?:Margin;
       xTitle?:string;
       yTitle?:string;

}


const XYChart = ({
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

}:XYChartProps) =>{
    return(
        <div>

        </div>
    )
}