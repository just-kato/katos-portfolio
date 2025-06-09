import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Flex, Divider, Icon } from '@chakra-ui/react';
import MenuItemButton from './MenuItemButton';
import { menuItems } from './constants';

const Menu = ({ isOpen, onClose, onMenuItemClick }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-button')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <Box
      ref={menuRef}
      className="menu-container"
      position="absolute"
      bottom="60px"
      left="20px"
      bg="gray.50"
      boxShadow="lg"
      width="250px"
      height="250px"
      borderRadius="sm"
      display="flex"
      zIndex="9999"
    >
      <Box
        bg="pink.200"
        width="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Text transform="rotate(-90deg)" position="absolute" top="10%">Menu</Text>
      </Box>

      <Flex align="left" gap={1} padding="15px" width="100%" flexDirection="column">
        {menuItems.slice(0, 4).map((item, index) => (
          <MenuItemButton key={index} icon={<Icon as={item.icon} />} onClick={() => {
              onMenuItemClick(item.label);
              onClose();
            }}>
            <Text>{item.label}</Text>
          </MenuItemButton>
        ))}

        <Divider my={2} />

        {menuItems.slice(4).map((item, index) => (
  <MenuItemButton
    key={index}
    icon={<Icon as={item.icon} />}
    onClick={() => {
      if (item.action === 'shutdown') {
        window.location.reload();
      } else {
        onMenuItemClick(item.label);
      }
      onClose();
    }}>
    <Text>{item.label}</Text>
  </MenuItemButton>
))}

      </Flex>
    </Box>
  );
};
Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
};

export default Menu;
