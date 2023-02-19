import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import cards from "../img/card2.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

const apiHost = ""; // 保持与页面服务器同一地址（nginx代理)

function Desert() {

    const [queryData, setQueryData] = useState([]);

    const fetchData = async (data) => {
        try {
            // 提交到服务器
            axios.get(apiHost + "/v1/client/pos/category", data,{ withCredentials: false }).then(
                res => {
                    console.log("progress return  ==>", res.data)
                    const resp = res.data
                    setQueryData(resp)
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

    return (
        <>
            <div className="foodcontainer">
                <div className="left-side">
                    <div className="cards">
                        <div className="all">
                            <div className="varieties">
                            {
                                queryData.map(m => {
                                    return (
                                        <Link to={m.link} className="var-btn">
                                            {m.name}
                                        </Link>
                                    )
                                    })
                                }
                            </div>
                        </div>

                        <main>
                            <FoodBox imgSrc={cards} title={"Desert 1"} price={"$3"}/>
                            <FoodBox imgSrc={cards} title={"Desert 2"} price={"$10"}/>
                            <FoodBox imgSrc={cards} title={"Desert 3"} price={"$8"}/>
                            <FoodBox imgSrc={cards} title={"Desert 4"} price={"$10"}/>
                            <FoodBox imgSrc={cards} title={"Desert 5"} price={"$5"}/>
                            <FoodBox imgSrc={cards} title={"Desert 6"} price={"$12"}/>
                        </main>
                    </div>
                </div>
                <div className="right-side">
                    <PaymentSect />
                </div>
            </div>
        </>
    );
}

export default Desert;
