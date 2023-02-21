import React from "react";

import "../../Components/seatbox.css";
import "../../Components/container.css";
import SeatBox from "../../Components/SeatBox";

// import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

const apiHost = ""; // 保持与页面服务器同一地址（nginx代理)



function SeatsShow() {

    // const [updateCart, setUpdateCart] = useState(1);
    // const [queryData, setQueryData] = useState([]);
    const [querySeat, setSeatData] = useState([]);

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

        // fetchData2(data).then(r => {
        //     console.log("sss2")
        // })

    }, []);
    const clickedForUpdate = (e) => {
        console.log("clickedForUpdate-->", e)
        // setUpdateCart(Math.random() * 10000000000000000)
    }
    
    
    return (
        <>
            <div className="seatcontainer">
                <div className="left-side">
                    <div className="cards">
                        {/* <div className="all">
                            <div className="varieties">
                            {
                                querySeat.map(m => {
                                    return (
                                        <Link to="/" value={m.id} onClick={onCategoryChange} className="var-btn" key={m.id} data-id={m.id}>
                                            {m.name}
                                        </Link>
                                    )
                                })
                            }
                            </div>
                        </div> */}

                        <main>
                            {
                                querySeat.map(m => {
                                    return (
                                        <SeatBox imgSrc={m.icon} title={m.name} price={m.price} key={m.id} sku={m.sku} product_id={m.id} isClicked={clickedForUpdate} />
                                    )
                                })
                            }
                        </main>
                    </div>
                </div>
            </div>
        </>
    );

}

export default SeatsShow;