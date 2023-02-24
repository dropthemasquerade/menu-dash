import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ResponsiveGrid from "./MenuOrder";
import Paper from '@mui/material/Paper';
import ControlledOpenSpeedDial from "./PayBox";
import FaCategory from './FaCategory';
import SpanningTable from "./OrderBox";
import PayBox from "./PayBox";
import FloatingActionButtons from "./Category";

export default function MenuBox() {


  return (
    <Box
        sx={{
            color: 'action.active',
            display: 'flex',
            flexDirection: 'column',
              '& > *': {
            },
            '& .MuiBadge-root': {
            marginRight: 2,
            },
        }}
      >
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                  <Grid xs={6} md={8}>
                      {/* <FaCategory/> */}
                        <Paper elevation={2} style={{maxHeight: 700, overflow: 'auto'}}>
                        <ResponsiveGrid/>
                          </Paper>
                      <FloatingActionButtons/>
                 </Grid>
                  <Grid xs={6} md={4}>
                      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                          <SpanningTable />
                          <PayBox/>
                    </Paper>
                  </Grid>
                  <Grid xs={6} md={3}>
                    <ControlledOpenSpeedDial/>
                </Grid>
            </Grid>
              </Box>
    </Box>
  );
}