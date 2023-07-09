import type { Meta, StoryObj } from '@storybook/react';
import { FitIcon } from '..';

const meta: Meta<typeof FitIcon> = {
    title: 'Componentes/FitIcon',
    component: FitIcon,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitIcon>;

export const Default: Story = {
    args: {
        icon: '',
    },
};
