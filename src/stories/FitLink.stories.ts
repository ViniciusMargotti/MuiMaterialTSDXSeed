import type { Meta, StoryObj } from '@storybook/react';
import { FitLink } from '..';

const meta: Meta<typeof FitLink> = {
    title: 'Componentes/FitLink',
    component: FitLink,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitLink>;

export const Default: Story = {
    args: {
        children: 'Link',
    },
};
