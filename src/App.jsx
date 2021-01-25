import React from 'react';
import { Deck, Slide, FlexBox, Box, FullScreen, Progress } from 'spectacle';

import logo from './logo.svg';

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const App = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide>
      <FlexBox>
        <img src={logo} alt="logo" height='100' width='100' />
      </FlexBox>
    </Slide>
  </Deck>
);


export default App;
