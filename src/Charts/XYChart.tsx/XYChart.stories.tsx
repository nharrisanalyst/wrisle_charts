import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import XYChart from './';

export type Data = {
     x:number;
     y:number
}

const meta = {
  title: 'XYChart',
  component: XYChart<Data>,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1200px' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof XYChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
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
};