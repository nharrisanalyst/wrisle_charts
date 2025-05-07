import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Xaxis from '../xAxis/Xaxis'
import LeftAxis from '../LeftAxis/LeftAxis';
import CircleXY from '../CircleXY/CircleXY';

const data = [{
    x:1,
    y:2
}, 
 {
    x:22,
    y:31
 }
]

const providerProps = {
    data:data,
    xAccessor:d => d.x,
    yAccessor:d => d.y,
}


import ChartProvider from '../../Provider/ChartProvider';
import Grid from './Grid';

const meta = {
  title: 'Components/Grid',
  component:  Grid,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1200px' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <ChartProvider {...providerProps} >
        
        <Story />
        <Xaxis />
        <LeftAxis />
        <CircleXY r={5} />
        </ChartProvider>
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    
    }
}
