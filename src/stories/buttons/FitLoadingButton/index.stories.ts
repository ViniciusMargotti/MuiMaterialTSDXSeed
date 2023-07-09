import type { Meta, StoryObj } from '@storybook/react';
import { FitLoadingButton } from '../../../index';

const meta: Meta<typeof FitLoadingButton> = {
    title: 'Componentes/FitLoadingButton',
    component: FitLoadingButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitLoadingButton>;

export const Contained: Story = {
    args: {
        children: 'Contained',
        variant: 'contained',
        loading: true,
    },
};

export const Outlined: Story = {
    args: {
        children: 'Outlined',
        variant: 'outlined',
        loading: true,
    },
};

export const Text: Story = {
    args: {
        children: 'Text',
        variant: 'text',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        variant: 'contained',
        disabled: true,
        loading: true,
    },
};
