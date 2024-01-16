import React from 'react';
import {  Meta, StoryFn } from '@storybook/react';
import CustomButton from './CustomButton';

export default {
  title: 'YourPackageName/CustomButton',
  component: CustomButton,
} as Meta;

const Template: StoryFn = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // Props to pass to the CustomButton
  children: 'Click Me',
};

// Add more variations of your component here
