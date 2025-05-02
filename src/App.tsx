import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
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
        <GridItem pl="2" bg="green.300">
          <Search />
        </GridItem>
        <GridItem pl="2" bg="blue.300">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
