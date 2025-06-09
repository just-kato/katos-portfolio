import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { Rnd } from 'react-rnd';

const WindowBox = ({ title, content, onClose, zIndex, bringToFront, backgroundColor, minWidth, minHeight }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isDraggingDisabled, setIsDraggingDisabled] = useState(false);

  const defaultPosition = isMobile ? { x: 0, y: 0 } : {x: Math.floor(Math.random() * 400) + 50, y: Math.floor(Math.random() * 300) + 50};

  return (
    <Rnd
      default={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        width: minWidth,
        height: minHeight,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      style={{ zIndex }}
      onMouseDown={() => {
        bringToFront();
        console.log("Bringing window to front with zIndex:", zIndex);
      }}
      disableDragging={isMobile}
      enableResizing={true}
    >
      <Box
        bg="#bddbff"
        boxShadow="lg"
        padding="10px"
        borderRadius="md"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Text fontWeight="bold">{title}</Text>
          <IconButton
            size="sm"
            icon={<FaTimes />}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close window"
          />
        </Box>
        <Box flexGrow={1} overflow="auto" backgroundColor={backgroundColor} onMouseEnter={() => setIsDraggingDisabled(true)}  onMouseLeave={() => setIsDraggingDisabled(false)}>
          {content}
        </Box>
      </Box>
    </Rnd>
  );
};

// Add PropTypes validation
WindowBox.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  zIndex: PropTypes.number.isRequired,
  bringToFront: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
};

WindowBox.defaultProps = {
  backgroundColor: "#fff",
  minWidth: 300,
  minHeight: 200,
};

export default WindowBox;
