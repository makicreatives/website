// import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {MegaMenu} from './MegaMenu';

const meta: Meta<typeof MegaMenu> = {
  component: MegaMenu,
};

export default meta;

type Story = StoryObj<typeof MegaMenu>;

export const Basic: Story = {args: {}};
