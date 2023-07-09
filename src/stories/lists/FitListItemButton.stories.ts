import type { Meta, StoryObj } from '@storybook/react';
import { FitListItemButton } from '../../index';

const meta: Meta<typeof FitListItemButton> = {
    title: 'Componentes/FitListItemButton',
    component: FitListItemButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitListItemButton>;

export const Default: Story = {
    args: {},
};
