import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ResponsiveGrid from "./MenuOrder";
import Paper from '@mui/material/Paper';
import ControlledOpenSpeedDial from "./PayBox";
import FaCategory from './FaCategory';
import SpanningTable from "./OrderBox";

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
            marginRight: 4,
            },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                  <Grid xs={6} md={9}>
                  {/* <FaCategory/> */}
                    <Paper elevation={3} style={{maxHeight: 760, overflow: 'auto'}}>
                        <ResponsiveGrid/>
                    </Paper>
                 </Grid>
                  <Grid xs={6} md={3}>
                      <Paper elevation={3} style={{ maxHeight: 560, overflow: 'auto', background: 'white' }}>
                          <SpanningTable/>
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