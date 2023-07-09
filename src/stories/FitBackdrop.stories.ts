import type { Meta, StoryObj } from '@storybook/react';
import { FitBackdrop } from '../index';

const meta: Meta<typeof FitBackdrop> = {
    title: 'Componentes/FitBackdrop',
    component: FitBackdrop,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitBackdrop>;

export const Default: Story = {
    args: {
        open: true,
    },
};
