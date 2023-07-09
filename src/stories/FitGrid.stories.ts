import type { Meta, StoryObj } from '@storybook/react';
import FitGrid from '../components/FitGrid';

const meta: Meta<typeof FitGrid> = {
    title: 'Componentes/FitGrid',
    component: FitGrid,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitGrid>;

export const Default: Story = {
    args: {
        children: 'FitGrid',
    },
};
