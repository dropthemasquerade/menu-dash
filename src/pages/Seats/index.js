import React from "react";

import "../../Components/seatbox.css";
import "../../Components/container.css";

import TopBar from "../../Components/TopBar";
import { useState, useEffect } from "react";
import axios from "axios";

import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import MenuBox from "../../Components/MenuBox";

const apiHost = ""; // 保持与页面服务器同一地址（nginx代理)



function SeatsShow() {

    const [querySeat, setSeatData] = useState([]);
    const [themeMode, setThemeMode] = useState(false);

    const fetchData = async (data) => {
        try {
            // 提交到服务器
            axios.get(apiHost + "/v1/client/pos/seat", data,{ withCredentials: false }).then(
                res => {
                    console.log("progress return  ==>", res.data)
                    const resp = res.data
                    setSeatData(resp)
                }
            ).catch(err => {
                console.log("err is->", err)
            })

        } catch (error) {
            console.error(error);
        }
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const data = {
            "status": true // 初始化状态为1
        }
        fetchData(data).then(r => {
            console.log("sss")
        })

    }, []);
    const clickedForUpdate = (e) => {
        console.log("clickedForUpdate-->", e)
        // setUpdateCart(Math.random() * 10000000000000000)
    }

    const theme = createTheme({
        palette: {
            mode: themeMode? 'dark': 'light',
        }
      })
    
    
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <TopBar themeCheckMode={themeMode} themeChange={ ()=> setThemeMode(!themeMode)} />
                <MenuBox/>
            </Box>
        </ThemeProvider>
    );

}

export default SeatsShow;