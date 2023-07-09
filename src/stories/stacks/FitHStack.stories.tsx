import type { Meta, StoryObj } from '@storybook/react';
import { FitHStack } from '../..';

const meta: Meta<typeof FitHStack> = {
    title: 'Componentes/FitHStack',
    component: FitHStack,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitHStack>;

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
