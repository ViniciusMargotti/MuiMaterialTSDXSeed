import type { Meta, StoryObj } from '@storybook/react';
import { FitCircularProgress } from '../index';

const meta: Meta<typeof FitCircularProgress> = {
    title: 'Componentes/FitCircularProgress',
    component: FitCircularProgress,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitCircularProgress>;

export const Default: Story = {
    args: {
    },
};
