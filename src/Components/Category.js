import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="add">
            推荐
          </Fab>
          
        <Fab color="secondary" aria-label="edit">
            卤菜
        </Fab>
          
      <Fab variant="extended">
        饮品
      </Fab>
    
        <Fab aria-label="like" color="success">
              主食
        </Fab>
        
          <Fab aria-label="like" color="info">
              餐具
         </Fab>
    </Box>
  );
}