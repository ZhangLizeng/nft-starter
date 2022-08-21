import React from 'react';

import ImgMediaCard from '../components/imageMediaCard';

export default {
  title: 'Example/Header',
  component: ImgMediaCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <ImgMediaCard {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  alt: 'ImageCard',
  img: 'https://img.seadn.io/files/87419574bbad4ffcb03eefcf2433eaef.png?fit=max&w=600',
  title: 'ImageCard',
  caption: 'Test',
  description: 'Test',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
