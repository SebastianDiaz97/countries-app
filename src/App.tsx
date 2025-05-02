import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";
import MainContent from "./components/MainContent";

function App() {
  const [country, setCountry] = useState({ country: "" });
  console.log(country);
  return (
    <>
      <Grid
        gridTemplateRows={"50px 50px 1fr"}
        // gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        // color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2">
          <Header />
        </GridItem>
        <GridItem pl="2" maxH={"100px"}>
          <Search setCountry={setCountry} />
        </GridItem>
        <GridItem pl="2" maxW={"90%"} m={"auto"}>
          <MainContent />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
