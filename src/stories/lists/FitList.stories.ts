import type { Meta, StoryObj } from '@storybook/react';
import { FitList } from '../../index';

const meta: Meta<typeof FitList> = {
    title: 'Componentes/FitList',
    component: FitList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitList>;

export const Default: Story = {
    args: {},
};
