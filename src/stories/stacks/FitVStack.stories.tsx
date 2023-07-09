import type { Meta, StoryObj } from '@storybook/react';
import { FitVStack } from '../..';

const meta: Meta<typeof FitVStack> = {
    title: 'Componentes/FitVStack',
    component: FitVStack,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitVStack>;

export const Default: Story = {
    args: {
        children: (
            <>
                <div>Conteúdo 1</div>
                <div>Conteúdo 2</div>
            </>
        ),
    },
};
