import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Image, VStack, Text } from '@chakra-ui/react';
import portfolio from '../../assets/portfolio.png';
import PortfolioWindow from './PortfolioWindow'; // Import the new component

const Portfolio = ({ zIndex, bringToFront }) => {
  const [isPortfolioWindowOpen, setIsPortfolioWindowOpen] = useState(false);
  const [isWebsitesWindowOpen, setIsWebsitesWindowOpen] = useState(false);
  const [isResumeWindowOpen, setIsResumeWindowOpen] = useState(false);

  const togglePortfolioWindow = () => {
    setIsPortfolioWindowOpen((prev) => !prev);
    bringToFront();
  };

  const toggleWebsitesWindow = () => {
    setIsWebsitesWindowOpen((prev) => !prev);
    bringToFront();
  };

  const toggleResumeWindow = () => {
    setIsResumeWindowOpen((prev) => !prev);
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
        onClick={togglePortfolioWindow}
      >
        <VStack spacing={1}>
          <Image src={portfolio} boxSize={20} alt="Portfolio" />
          <Text>PORTFOLIO</Text>
        </VStack>
      </Box>

      <PortfolioWindow
        isPortfolioWindowOpen={isPortfolioWindowOpen}
        togglePortfolioWindow={togglePortfolioWindow}
        toggleWebsitesWindow={toggleWebsitesWindow}
        toggleResumeWindow={toggleResumeWindow}
        zIndex={zIndex}
        bringToFront={bringToFront}
        isWebsitesWindowOpen={isWebsitesWindowOpen}
        isResumeWindowOpen={isResumeWindowOpen}
      />
    </>
  );
};

Portfolio.propTypes = {
  zIndex: PropTypes.number.isRequired,
  bringToFront: PropTypes.func.isRequired,
};
export default Portfolio;
