import React from 'react';
import { Flex } from '@chakra-ui/react';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import SnakeGame from '../SnakeGame/SnakeGame';
import useZindexManager from '../../hooks/useZIndexManager';

const IconButtons = () => {
  const { windowZIndexes, bringToFront, isWindowOpen, toggleWindow } = useZindexManager();


  return (
    <Flex
      direction= 'column'
      alignItems="flex-start"
      gap={8}
      p={4}
      flexWrap="wrap"
      maxW="100vw"
    >
      <Portfolio
        zIndex={windowZIndexes.portfolio}
        bringToFront={() => bringToFront('portfolio')}
      />
      <Services
        zIndex={windowZIndexes.services}
        bringToFront={() => bringToFront('services')}
      />
      <Contact
        zIndex={windowZIndexes.contact}
        bringToFront={() => bringToFront('contact')}
        isWindowOpen={isWindowOpen.contact}
        toggleWindow={() => toggleWindow('contact')}
      />
      <SnakeGame
        zIndex={windowZIndexes.snakey}
        bringToFront={() => bringToFront('snakey')}
      />
    </Flex>
  );
};

export default IconButtons;
