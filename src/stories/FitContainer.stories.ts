import type { Meta, StoryObj } from '@storybook/react';
import FitContainer from '../components/FitContainer';

const meta: Meta<typeof FitContainer> = {
    title: 'Componentes/FitContainer',
    component: FitContainer,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitContainer>;

export const Default: Story = {
    args: {
        children: 'FitContainer',
    },
};
