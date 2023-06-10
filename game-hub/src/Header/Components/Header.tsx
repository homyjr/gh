import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  InputLeftElement,
  InputGroup,
  Image,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import ColorMode from "./ColorMode";

interface Props {
  bgColor: boolean;
  setBgColor: (themeColor: boolean) => void;
}

const Header = () => {
  return (
    <>
      <Box p={3} px={3}>
        <Flex h="100%" justifyItems="center" align="center">
          <Box flex="1">
            <Image
              htmlHeight="40px"
              htmlWidth="70px"
              objectFit="cover"
              src="../src/assets/bigi_logo.png"
              alt="Dan Abramov"
            />
          </Box>
          <Box flex="4" justifyContent="center">
            <Box px={6}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon color="#4A5568" />
                </InputLeftElement>
                <Input type="tel" placeholder="Search Games" />
              </InputGroup>
            </Box>
          </Box>
          <Box flex="1">
            <ColorMode />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
