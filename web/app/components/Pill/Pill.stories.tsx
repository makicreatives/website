import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Pill} from './Pill';

const meta: Meta<typeof Pill> = {
  component: Pill,
};

export default meta;

type Story = StoryObj<typeof Pill>;

export const Basic: Story = {args: {}};
