import React, {useState} from "react";
import styles from "./styles/sidebar.module.css";
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Image,
  Flex,
} from "@chakra-ui/react";

const Sidebar = () => {

    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const [listItems, setListItems] = useState([
        { image: 'https://bit.ly/dan-abramov', name: 'Item 1' },
        { image: 'https://bit.ly/dan-abramov', name: 'Item 2' },
        { image: 'https://bit.ly/dan-abramov', name: 'Item 3' },
      ]);

  return (
    <>
      <Box mt={12} pl={3}>
        <Text fontSize="2xl" as="b">
          Genres
        </Text>
        <UnorderedList m={0} mt={2}>
           {listItems.map((item,index) =>(
            <ListItem
            key={index}
            listStyleType="none"
            mb={3}
            cursor="pointer"
            className={styles.liParent}
            onClick={() => setSelectedIndex(index)}
          >
            <Flex align="center" gap={2}>
              <Box>
                <Image
                  borderRadius="10px"
                  boxSize="40px"
                  objectFit="cover"
                  src={item.image}
                  alt="Dan Abramov"
                />
              </Box>
              <Box className={selectedIndex === index ?  styles.onClickFontStyle : styles.liChildText }>{item.name}</Box>
            </Flex>
          </ListItem>
           ))} 
        </UnorderedList>
      </Box>
    </>
  );
};

export default Sidebar;
