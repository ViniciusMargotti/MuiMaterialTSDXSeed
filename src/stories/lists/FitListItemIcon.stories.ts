import type { Meta, StoryObj } from '@storybook/react';
import { FitListItemIcon } from '../../index';

const meta: Meta<typeof FitListItemIcon> = {
    title: 'Componentes/FitListItemIcon',
    component: FitListItemIcon,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitListItemIcon>;

export const Default: Story = {
    args: {},
};
