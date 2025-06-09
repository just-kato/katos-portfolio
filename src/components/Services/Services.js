import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import "@lottiefiles/lottie-player";
import ServicesWindow from './ServicesWindow';
import kato from '../../assets/kato.png';

const Services = ({ zIndex, bringToFront }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const toggleWindow = () => {
    setIsWindowOpen((prev) => !prev);
    bringToFront();
  };

  return (
    <>
      <Box
        as="button"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bg="transparent"
        border="none"
        cursor="pointer"
        _hover={{ bg: 'none' }}
        onClick={toggleWindow}
      >
        <VStack spacing={1}>
          <Image src={kato} boxSize={20} alt="Services" />
          <Text>ABOUT ME</Text>
        </VStack>
      </Box>
<ServicesWindow toggleWindow={toggleWindow} isWindowOpen={isWindowOpen} bringToFront={bringToFront} zIndex={zIndex}/>

    </>
  );
};
Services.propTypes = {
  zIndex: PropTypes.number.isRequired,
  bringToFront: PropTypes.func.isRequired,
};
export default Services;
