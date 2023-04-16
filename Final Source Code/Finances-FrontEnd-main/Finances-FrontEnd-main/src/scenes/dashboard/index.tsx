import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)") // we use this bool var to determine when we are at a min width of 1200px or not. We are using it to make the ront-end responsive
  return (
  <Box width="100%" height="100%" display="grid" gap="1.5rem" 
    sx={
      isAboveMediumScreens ? {
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))", // the dashboard screen gets divided into 3 columns, each being 370px. But if we have a very big screen then only 1 complete fractional unit
        gridTemplateRows: "repeat(10, minmax(60px,1fr))",
        gridTemplateAreas: gridTemplateLargeScreens,
    } : {
      gridAutoColumns: "1fr",
      gridAutoRows: "80px",
      gridTemplateAreas : gridTemplateSmallScreens,
    }}> 
      <Row1 />
      <Row2 />
      <Row3 />
  </Box>
   );
  
}

export default Dashboard