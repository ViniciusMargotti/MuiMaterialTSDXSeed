import type { Meta, StoryObj } from '@storybook/react';
import { FitListSubheader } from '../../index';

const meta: Meta<typeof FitListSubheader> = {
    title: 'Componentes/FitListSubheader',
    component: FitListSubheader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitListSubheader>;

export const Default: Story = {
    args: {},
};
