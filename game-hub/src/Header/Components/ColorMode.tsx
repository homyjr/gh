import React from "react";
import { Box, Flex, Switch, useColorMode, Center } from "@chakra-ui/react";

interface Props {
  bgColor: boolean;
  setBgColor: (themeColor: boolean) => void;
}

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex p={2} gap={3} justify="center">
        <Center>
            <Switch size="md" onChange={toggleColorMode} />
          </Center>
          <Center>
              {colorMode === "light" ? "Light" : "Dark"}{" "}
          </Center>
      </Flex>
    </>
  );
};

export default ColorMode;
