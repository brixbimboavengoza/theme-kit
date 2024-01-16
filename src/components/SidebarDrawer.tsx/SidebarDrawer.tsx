import React, { ReactNode, useState } from 'react'
import { 
  Drawer, 
  DrawerBody, 
  DrawerHeader, 
  DrawerOverlay, 
  DrawerContent, 
  IconButton, 
  useDisclosure 
} from '@chakra-ui/react';
import { IoMdMenu } from 'react-icons/io'
import { FaAngleRight, FaAngleLeft} from 'react-icons/fa'

type SidebarDrawerProps = {
  children: ReactNode
}

function SidebarDrawer({ children }: SidebarDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        icon={<IoMdMenu />}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {isCollapsed ? 'Icons Only' : 'Icons and Text'}
            <IconButton
              aria-label="Collapse Menu"
              icon={isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
              onClick={toggleCollapse}
              size="sm"
              float="right"
            />
          </DrawerHeader>
          <DrawerBody>
            test
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
