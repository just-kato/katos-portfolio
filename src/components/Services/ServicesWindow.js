import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, VStack, Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import "@lottiefiles/lottie-player";
import services from '../../assets/services.png';
import aboutMeData from './constants';
import WindowBox from '../WindowBox/WindowBox';
import kato from '../../assets/kato.png';

const ServicesWindow = ({isWindowOpen, toggleWindow, zIndex, bringToFront }) => {
  const windowSize = useBreakpointValue({
    base: { width: "380px", height: "600px" },
    md: { width: "500px", height: "600px" },
    lg: { width: "700px", height: "600px" },
  });
  return(
    <>
    {isWindowOpen && (
      <WindowBox
        title="Services"
        minWidth={windowSize.width}
        minHeight={windowSize.height}
        backgroundColor="white"
        content={
          <VStack spacing={3} backgroundColor="white" p={3}>
<Box backgroundColor="pink" borderRadius='full'>
              <Image src={kato} boxSize={40} alt="About"  borderRadius='full'/>
              </Box>
            {aboutMeData.map((service, index) => (
              <Flex key={index} textAlign="left" flexDirection="column" gap={2}>
                <Text fontWeight="bold">- {service.title}:</Text>
                <Text fontSize={{base: "xs",lg:"md"}}>{service.description}</Text>
              </Flex>
            ))}
          </VStack>
        }
        onClose={toggleWindow}
        zIndex={zIndex}
        bringToFront={bringToFront}
      />
    )}
    </>
  )
}
ServicesWindow.propTypes = {
  isWindowOpen: PropTypes.bool.isRequired,
  toggleWindow: PropTypes.func.isRequired,
  zIndex: PropTypes.number.isRequired,
  bringToFront: PropTypes.func.isRequired,
};
export default ServicesWindow;
