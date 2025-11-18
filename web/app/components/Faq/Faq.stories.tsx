import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Faq} from './Faq';

const meta: Meta<typeof Faq> = {
  component: Faq,
};

export default meta;

type Story = StoryObj<typeof Faq>;

export const Basic: Story = {args: {}};
