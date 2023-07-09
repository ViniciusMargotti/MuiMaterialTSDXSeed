import type { Meta, StoryObj } from '@storybook/react';
import { FitListItemAvatar } from '../../index';

const meta: Meta<typeof FitListItemAvatar> = {
    title: 'Componentes/FitListItemAvatar',
    component: FitListItemAvatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitListItemAvatar>;

export const Default: Story = {
    args: {},
};
