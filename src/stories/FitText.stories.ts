import type { Meta, StoryObj } from '@storybook/react';
import { FitText } from '..';

const meta: Meta<typeof FitText> = {
    title: 'Componentes/FitText',
    component: FitText,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitText>;

export const Default: Story = {
    args: {
        children: 'Texto',
    },
};
