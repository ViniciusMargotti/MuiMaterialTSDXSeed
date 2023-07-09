import type { Meta, StoryObj } from '@storybook/react';
import { FitTextInput } from '..';

const meta: Meta<typeof FitTextInput> = {
    title: 'Componentes/FitTextInput',
    component: FitTextInput,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitTextInput>;

export const Default: Story = {
    args: {
        label: 'Insira seu e-mail',
        variant: 'outlined',
    },
};
