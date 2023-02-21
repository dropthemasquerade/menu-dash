import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

import { Link } from "react-router-dom";

const apiHost = ""; // 保持与页面服务器同一地址（nginx代理)

const PayMenthod = () => (
  <div className="varieties">
    <Link to="/wechatPay"  className="var-btn-pay">收款码</Link>
    <Link to="/aliPay" className="var-btn-pay">主扫</Link>
    <Link to="/wechatPay"  className="var-btn-pay">其它</Link>
  </div>
);

const showPayMethod = () => {
  toast.success(PayMenthod, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

function PaymentSect({updateCart}) {
  const [cartItemList, setCartItemList] = useState([]);
  const [cartInfo, setCartInfo] = useState({ "discount": 0, "total": 0 });
  
  const [countState, setCountState] = useState(updateCart);

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

  const removeItemFromCart = async (data) => {
    try {
        // 提交到服务器
        axios.delete(apiHost + "/v1/client/pos/cart/" + data.productId + "?cartId=" + data.cartId,{ withCredentials: false }).then(
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

  const onTrashClick = (e) => {
    const cartId = localStorage.getItem('CART_ID')
    const productId = e.target.dataset.productId
      const data = {
        "status": true, // 初始化状态为1
        "cartId": cartId,
        "productId": productId,
      }
    removeItemFromCart(data)
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const cartId = localStorage.getItem('CART_ID')
      const data = {
        "status": true, // 初始化状态为1
        "cartId": cartId
      }
      fetchData(data).then(r => {
          console.log("sss")
      })
      setCountState(updateCart);
  }, [updateCart]);

  return (
      <div className="payment">
        <div className="name">
          <h4>品名</h4>
          <p>数量</p>
          <p>小计</p>
        </div>
      <div className="price">
        {
         updateCart && cartItemList.map(m => {
              return (<article key={m.product_id}>
              <div className="pay">
                <div>
                  <b>{m.name}</b>
                    <p>{m.price}/{m.unit}</p>
                </div>
                <p className="qty-box">{m.number}</p>
                <p>{ parseFloat((m.number * m.price).toFixed(2))}</p>
              </div>
    
              <div className="pay">
                <input className="order-input" placeholder="备注" ></input>
                  <FaTrashAlt color="red" onClick={onTrashClick} data-productId={m.product_id} />
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

        <figure>
            <div className="last">
              <p>#{countState}</p>
          </div>
        </figure>
        
          <div className="varieties">
            <button onClick={showPayMethod} className="var-btn-settle">结算</button>
              <ToastContainer />
            </div>
        </div>
      </div>
  );
}

export default PaymentSect;
