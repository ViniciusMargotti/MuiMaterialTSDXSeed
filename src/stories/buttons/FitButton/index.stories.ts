import type { Meta, StoryObj } from '@storybook/react';
import { FitButton } from '../../../index';

const meta: Meta<typeof FitButton> = {
    title: 'Componentes/FitButton',
    component: FitButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitButton>;

export const Contained: Story = {
    args: {
        children: 'Contained',
        variant: 'contained',
    },
};

export const Outlined: Story = {
    args: {
        children: 'Outlined',
        variant: 'outlined',
    },
};

export const Text: Story = {
    args: {
        children: 'Text',
        variant: 'text',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        variant: 'contained',
        disabled: true,
    },
};
