import type { Meta, StoryObj } from '@storybook/react';
import { FitListItemText } from '../../index';

const meta: Meta<typeof FitListItemText> = {
    title: 'Componentes/FitListItemText',
    component: FitListItemText,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitListItemText>;

export const Default: Story = {
    args: {},
};
