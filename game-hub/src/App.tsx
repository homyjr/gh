import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Box, Grid, GridItem , extendTheme } from "@chakra-ui/react";
import Header from "./Header/Components/Header";
import Sidebar from "./Sidebar/Sidebar";
import GameSection from './MainPage/components/GameSection'
import "./App.css";

function App() {

  return (
    <>
      <Box>
        <Grid
          h="calc(100vh)"
          w="100%"
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(12, 1fr)"
        >
          <GridItem rowSpan={1} colSpan={12}>
            <Header></Header>
          </GridItem>
          <GridItem rowSpan={11} colSpan={2}>
            <Sidebar></Sidebar>
          </GridItem>
          <GridItem rowSpan={11} colSpan={10}>
            <GameSection></GameSection>
          </GridItem>
        </Grid>
        

      </Box>
    </>
  );
}

export default App;
