import type { Meta, StoryObj } from '@storybook/react';
import { FitAvatar } from '../index';

const meta: Meta<typeof FitAvatar> = {
    title: 'Componentes/FitAvatar',
    component: FitAvatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitAvatar>;

export const Default: Story = {
    args: {
        src: 'https://i.pravatar.cc/300',
    },
};
