import React from 'react';
import { Deck, Slide, FlexBox, Box, FullScreen, Progress, Heading, Text, UnorderedList, ListItem, CodeSpan, Notes } from 'spectacle';

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
      <FlexBox height="100%" flexDirection="column">
        <Heading>
          React Renders Optimization
        </Heading>
        <Text textSize="1.7em" margin="40px 0px 0px" bold textColor="tertiary">
          Sergii Rumiantsev
        </Text>
        <Text textSize="1.2em" margin="40px 0px 0px" bold textColor="#4caf50">
          Levi9
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
      <Heading>Agenda</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>Pre-optimize or not to pre-optimize?</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Props: &#123;&#123;styles&#125;&#125;, functions and big objects</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Conditional rendering</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>useMemo / useCallback / useSuperMemo</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>React.memo / ShouldComponentUpdate</CodeSpan>
        </ListItem>
        <ListItem><CodeSpan>React.Context</CodeSpan></ListItem>
        <ListItem>
          <CodeSpan>So lets React.memo everything?</CodeSpan>
        </ListItem>
      </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
      </FlexBox>
    </Slide>
  </Deck>
);


export default App;
