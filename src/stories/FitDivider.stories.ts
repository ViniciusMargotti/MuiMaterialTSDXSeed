import type { Meta, StoryObj } from '@storybook/react';
import { FitDivider } from '../index';

const meta: Meta<typeof FitDivider> = {
    title: 'Componentes/FitDivider',
    component: FitDivider,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitDivider>;

export const Middle: Story = {
    args: {
        variant: 'middle',
    },
};

export const Inset: Story = {
    args: {
        variant: 'inset',
    },
};

export const FullWidth: Story = {
    args: {
        variant: 'fullWidth',
    },
};
