import React from "react";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import SimpleBadge from "./Message";
import GrainIcon from '@mui/icons-material/Grain';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import StoreStatus from "./StoreStatus";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Chip from '@mui/material/Chip';
import Person2Icon from '@mui/icons-material/Person2';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import OpenTables from "./Tables"; 
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
function formatDate(date) {
    return (
        [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        ].join('-') +
        ' ' +
        [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
        ].join(':')
    );
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 1,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));


function TopBar({themeCheckMode, themeChange}) {
    let [currentTime, changeTime] = React.useState(formatDate(new Date()));

    function checkTime() {
        changeTime(formatDate(new Date()));
    }
    setInterval(checkTime, 1000);

    return (
        <Paper elevation={1} sx={{ background: '#252837', color: 'white' }}>
            <Grid container columns={36} >
                <Grid xs={3}>
                    <Chip icon={<GrainIcon color={"success"} />} label="云在线" sx={{display: {color: "white"}}} />
                </Grid>
                <Grid xs={3}>
                    <Chip icon={<Person2Icon color={"secondary"} />} label="103" sx={{display: {color: "white"}}} />
                </Grid>
                <Grid xs={3}>
                <Chip icon={<Diversity3Icon color={"error"} />} label="晚班" sx={{display: {color: "white"}}} />
                </Grid>

                <Grid xs={5}>
                    <Chip icon={<AddLocationIcon color={"action"} />} label="黄李记站前路店" sx={{display: {color: "white"}}} />
                </Grid>


                <Grid xs={6}>
                    <Chip icon={<OpenTables /> } label="" />
                </Grid>
                <Grid xs={5}>
                    <Chip icon={ <StoreStatus />} label="入座率" sx={{display: {color: "white"}}} />
                </Grid>
                <Grid xs={3}>
                    <Chip icon={<SimpleBadge color={"info"} />} label="消息" sx={{display: {color: "white"}}} />
                </Grid>

                <Grid xs={3}>
                <MaterialUISwitch sx={{ m: 0 }} {...label} defaultChecked checked={themeCheckMode} onChange={themeChange}/>
                </Grid>

                <Grid xs={5}>
                    <Chip icon={<AccessTimeIcon color={"primary"} />} label={currentTime} sx={{display: {color: "white"}}} />
                </Grid>
            </Grid>
        </Paper>
    )
}


export default TopBar;