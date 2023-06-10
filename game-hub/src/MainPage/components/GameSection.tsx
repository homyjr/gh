import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import styles from "./styles/gameSection.module.css";
import FilterDropDown from "./FilterDropDown";

const GameSection = () => {
  
  return (
    <>
      <Box pt={4}>
        <Text className={styles.genreHeading}>Xbox Adventure Games</Text>
      </Box>
      <Box>
        <Flex gap={6}>
          <Box>
            <FilterDropDown></FilterDropDown>
          </Box>
          <Box>
            <FilterDropDown></FilterDropDown>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default GameSection;
