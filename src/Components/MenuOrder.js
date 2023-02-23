import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import FoodCard from "./MenuItem";
import FaCategory from "./FaCategory";



export default function ResponsiveGrid() {
  return (
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              scrollable={{ overflow: "auto" }}>
              
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={3} key={index}>
                {/* <Item>xs=2</Item> */}
                <FoodCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}