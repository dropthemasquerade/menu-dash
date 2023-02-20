import React from "react";

import "./foodcont.css";
import "./container.css";
import FoodBox from "./FoodBox";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

const apiHost = ""; // 保持与页面服务器同一地址（nginx代理)

function MenuShow() {

    const [queryData, setQueryData] = useState([]);
    const [queryProduct, setProductData] = useState([]);

    const fetchData = async (data) => {
        try {
            // 提交到服务器
            axios.get(apiHost + "/v1/client/pos/categories", data,{ withCredentials: false }).then(
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

    // 
    const fetchData2 = async (data) => {
        try {
            // 提交到服务器
            axios.get(apiHost + "/v1/client/pos/product?categoryId="+data.category, data,{ withCredentials: false }).then(
                res => {
                    console.log("progress return  ==>", res.data)
                    const resp = res.data
                    setProductData(resp)
                }
            ).catch(err => {
                console.log("err is->", err)
            })

        } catch (error) {
            console.error(error);
        }
    }

    const onCategoryChange = (e) =>  {
        console.log("target->", e.target.dataset.id)
        const reqData = {
            "category": e.target.dataset.id
        }
        fetchData2(reqData)
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const data = {
            "status": true // 初始化状态为1
        }
        fetchData(data).then(r => {
            console.log("sss")
        })

        fetchData2(data).then(r => {
            console.log("sss2")
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
                                        <Link to="/" value={m.id} onClick={onCategoryChange} className="var-btn" key={m.id} data-id={m.id}>
                                            {m.name}
                                        </Link>
                                    )
                                })
                            }
                            </div>
                        </div>

                        <main>
                            {
                                queryProduct.map(m => {
                                    return (
                                        <FoodBox imgSrc={m.icon} title={m.name} price={m.price} key={m.id} sku={m.sku} product_id={m.id} />
                                    )
                                })
                            }
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

export default MenuShow;
