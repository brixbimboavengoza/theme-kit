import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomButton from './CustomButton';
import { ButtonProps } from '@chakra-ui/react';

export const meta: Meta<ButtonProps> = {
  title: 'nodies-theme-kit/CustomButton',
  component: CustomButton,
};

const Template: StoryFn<ButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click Here',
};
