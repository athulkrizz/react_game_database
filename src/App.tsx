import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="red">
        Nav bar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="blue">
          Menu Bar
        </GridItem>
      </Show>
      <GridItem area="main" bg="lavender">
        Content
      </GridItem>
    </Grid>
  );
}

export default App;
