import { FaRegFileAlt, FaPencilAlt, FaEnvelope, FaGamepad, FaGlasses } from 'react-icons/fa';
import { GrPowerShutdown } from "react-icons/gr";

export const menuItems = [
  { icon: FaRegFileAlt, label: 'PORTFOLIO' },
  { icon: FaPencilAlt, label: 'SERVICES' },
  { icon: FaEnvelope, label: 'CONTACT' },
  { icon: FaGamepad, label: 'SNAKEY' },
  {
    icon: GrPowerShutdown,
    label: 'SHUT DOWN',
    action: 'shutdown',  // Add a string action to identify the shutdown case
  },
];
