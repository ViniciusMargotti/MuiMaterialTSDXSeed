import type { Meta, StoryObj } from '@storybook/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FitIconButton } from '../../..';

const meta: Meta<typeof FitIconButton> = {
    title: 'Componentes/FitIconButton',
    component: FitIconButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FitIconButton>;

export const Default: Story = {
    args: {
        children: <AddShoppingCartIcon />,
    },
};
