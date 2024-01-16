import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { Preview } from "@storybook/react";

const withChakra = (StoryFn) => (
  <ChakraProvider>
    <StoryFn />
  </ChakraProvider>
);

const preview: Preview = {
  decorators: [withChakra],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
