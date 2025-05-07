import { createContext, useMemo } from "react";
import { scaleLinear, ScaleLinear  } from 'd3-scale';
import {max} from 'd3-array';
import { chartMargin } from "../Constents/ChartConstents";

type MarginType ={
 left:number;
 top:number;
 bottom:number;
 right:number;
}

export const defaultMargin = {
    left:25,
    top:25,
    bottom:25,
    right:25
}

type ChartProviderProps<T> ={
    data:T[];
    xAccessor:(d:T) =>number |string| Date,
    yAccessor:(d:T) => number | string |Date,
    height?:number;
    width?:number;
    children: any;
    scaleType?:'linear';
    margin?:MarginType;
}

export type ChartContextType<T> = {
    data:T[];
    xAccessor:(d:T) =>number |string| Date,
    yAccessor:(d:T) => number | string |Date,
    height:number;
    width:number;
    scaleType:'linear';
    margin:MarginType;
    xScale:ScaleLinear<number,number>;
    yScale:ScaleLinear<number,number>;
   
}

export const  ChartContext = createContext<ChartContextType<any> | null>(null);

const ChartProvider = <T,>({
                    data, 
                    height=300, 
                    width=500, 
                    xAccessor, 
                    yAccessor, 
                    scaleType='linear',
                    margin = defaultMargin,   
                    children}: ChartProviderProps<T> ) =>{
    const xScale: ScaleLinear<number,number>  = useMemo(()=> scaleLinear()
    //@ts-ignore
                                            .domain([0, max(data, (d)=> xAccessor(d))])
                                            .range([margin.left, width-margin.right]).nice(), 
                                            [data, xAccessor])

    const yScale :ScaleLinear<number,number>  = useMemo(()=> scaleLinear()
    //@ts-ignore
                                            .domain([0, max(data, (d)=> yAccessor(d))])
                                            .range([height-margin.top, margin.bottom]).nice(), 
                                            [data, yAccessor])


    const context: ChartContextType<T> ={
        data,
        height,
        width,
        yAccessor,
        xAccessor,
        xScale,
        yScale,
        margin,
        scaleType:'linear'
    };

    return(
        <ChartContext.Provider  value={context} >
            <svg height={height} width={width}>
                {children}
            </svg>
        </ChartContext.Provider>
    );
}

export default ChartProvider;

