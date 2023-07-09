import type { Meta, StoryObj } from '@storybook/react';
import { FitStack } from '../..';

const meta: Meta<typeof FitStack> = {
    title: 'Componentes/FitStack',
    component: FitStack,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitStack>;

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
