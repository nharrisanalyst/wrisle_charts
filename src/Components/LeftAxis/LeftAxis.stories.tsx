import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';


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
import LeftAxis from './LeftAxis';

const meta = {
  title: 'Components/LeftAxis',
  component: LeftAxis,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1200px' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <ChartProvider {...providerProps} >
        <Story />
        </ChartProvider>
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof LeftAxis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    
    }
}
