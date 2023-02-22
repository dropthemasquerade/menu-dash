import React from "react";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import SimpleBadge from "./Message";
import WarningBadge from "./WarningBadge";
import GrainIcon from '@mui/icons-material/Grain';
import MessageIcon from '@mui/icons-material/Message';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import StoreStatus from "./StoreStatus";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Person2Icon from '@mui/icons-material/Person2';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LinearProgress from '@mui/material/LinearProgress';
import OpenTables from "./Tables"; 

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


function TopBar() {
    let [currentTime, changeTime] = React.useState(formatDate(new Date()));

    function checkTime() {
        changeTime(formatDate(new Date()));
    }
    setInterval(checkTime, 1000);

    return (
        <Paper elevation={1} sx={{ background: '#252837', color: 'white' }}>
            <Grid container columns={30} >
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
                <Grid xs={3}>
                    <Chip icon={ <StoreStatus />} label="入座率" sx={{display: {color: "white"}}} />
                </Grid>
                <Grid xs={3}>
                    <Chip icon={<SimpleBadge color={"info"} />} label="消息" sx={{display: {color: "white"}}} />
                </Grid>
                <Grid xs={4}>
                    <Chip icon={<AccessTimeIcon color={"primary"} />} label={currentTime} sx={{display: {color: "white"}}} />
                </Grid>

            </Grid>
        </Paper>
    )
}


export default TopBar;