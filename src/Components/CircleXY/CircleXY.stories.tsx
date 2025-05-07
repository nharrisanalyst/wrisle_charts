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
    xAccesor:d => d.x,
    yAccesor:d => d.y,
}


import ChartProvider from '../../Provider/ChartProvider';
import CircleXY from './CircleXY';

const meta = {
  title: 'Components/CircleXY',
  component: CircleXY,
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
} satisfies Meta<typeof CircleXY>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
     r:6
    }
}
