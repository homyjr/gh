import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/filterDropDown.module.css";
import {
  Box,
  Button,
  Fade,
  useDisclosure,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function FilterDropDown() {
  const { isOpen, onToggle } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    console.log("hello");
    if (ref.current && !ref.current.contains(event.target as Node)) {
      isOpen && onToggle();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box
          ref={ref}
          className={styles.dropDown}
          mt="2"
          p={0}
          mx="0px"
          bg="#2D3748"
          rounded="md"
          shadow="md"
          width="200px"
        >
          <UnorderedList styleType="none" m={0} my={2}>
            <ListItem className={styles.listItem} py={2} px={4}>
              Xbox
            </ListItem>
            <ListItem className={styles.listItem} py={2} px={4}>
              PC
            </ListItem>
            <ListItem className={styles.listItem} py={2} px={4}>
              PlayStation
            </ListItem>
            <ListItem className={styles.listItem} py={2} px={4}>
              Nintendo
            </ListItem>
          </UnorderedList>
        </Box>
      </Fade>
    </>
  );
}
export default FilterDropDown;
