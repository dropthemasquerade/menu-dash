import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const apiHost = ""; // 保持与页面服务器同一地址（nginx代理)



function PaymentSect() {

  const [cartItemList, setCartItemList] = useState([]);
  const [cartInfo, setCartInfo] = useState({"discount": 0, "total": 0});

  const fetchData = async (data) => {
    try {
        // 提交到服务器
        axios.get(apiHost + "/v1/client/pos/cart?cartId=" + data.cartId,{ withCredentials: false }).then(
            res => {
              console.log("progress return  ==>", res.data)
              const resp = res.data
              setCartItemList(resp.cart_item_list)
              setCartInfo(resp.sumary)
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
          "status": true, // 初始化状态为1
          "cartId": "c001"
        }
        fetchData(data).then(r => {
            console.log("sss")
        })

    }, []);

  return (
      <div className="payment">
        <div className="name">
          <h4>品项</h4>
          <p>数量</p>
          <p>价格</p>
        </div>

      <div className="price">
        {
         cartItemList.map(m => {
              return (<article key={m.product_id}>
              <div className="pay">
                <div>
                  <b>{m.name}</b>
                  <p>{m.price}</p>
                </div>
              
                <p className="qty-box">{m.number}</p>
                <p>{ m.price * m.number}</p>
              </div>
    
              <div className="pay">
                <input className="order-input" placeholder="备注" ></input>
                <FaTrashAlt color="red" />
                </div>
                </article>)
            })
          }

          <figure>
            <div className="last">
              <p className="space">折扣</p>
              <p>总价</p>
            </div>
            <div className="last">
              <p className="space">¥{cartInfo.discount}</p>
              <p>¥{cartInfo.total}</p>
            </div>
          </figure>



          {/* <figure>
            <div className="last">
              <p className="space">Discount</p>
              <p>Sub-total</p>
            </div>
            <div className="last">
              <p className="space">$0</p>
              <p>{total()}</p>
            </div>
          </figure> */}




        </div>
      </div>
  );
}

export default PaymentSect;
