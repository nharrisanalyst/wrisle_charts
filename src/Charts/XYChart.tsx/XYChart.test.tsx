import { describe, it } from 'vitest';
import {render} from '@testing-library/react';
import XYChart from './';

const xyChartProps ={
        data:[
            {
            x:23,
            y:23
            },
            {
            x:10,
            y:33
         },
            {
            x:10,
            y:5
            }
        ],
        yAccesor:d=>d.y,
        xAccessor:d=>d.x,
}

describe('these are test for <XYChart />', ()=>{
    it('renders without crashing', ()=>{
        render(<XYChart {...xyChartProps} />)
    })
})