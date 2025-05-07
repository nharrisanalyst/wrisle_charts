import ChartProvider, { defaultMargin } from '../../Provider/ChartProvider';
import Xaxis from '../../Components/xAxis/Xaxis';
import LeftAxis from '../../Components/LeftAxis/LeftAxis'
import CircleXY from '../../Components/CircleXY/CircleXY'
 
type XYChartProps<T> = {
       data: T[];
       xAccessor:(d:T)=>number;
       yAccessor:(d:T)=>number;
       colorAccessor?:(d:T)=>string;
       title?:string;
       height?:number;
       width?:number;
       margin?:Margin;
       xTitle?:string;
       yTitle?:string;
       children?: ReactNode| string |null;

}


const XYChart= <T,>({
    data,
    xAccessor,
    yAccessor,
    colorAccessor,
    title="",
    height=500,
    width=500,
    margin= defaultMargin,
    xTitle="",
    ytitle="",
    children

}:XYChartProps<T>) =>{
 


    return(
        <ChartProvider data={data} xAccessor={xAccessor} yAccessor={yAccessor} width={width} height={height} margin={margin} >
            <Xaxis />
            <LeftAxis />
            <CircleXY />
        </ChartProvider>
    )
}

export default XYChart;