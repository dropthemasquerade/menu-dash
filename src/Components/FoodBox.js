import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const apiHost = ""; // 保持与页面服务器同一地址（nginx代理)



function FoodBox({ imgSrc, title, price, sku, product_id, isClicked}) {

  const notifyAndSubmit = (e) => {
    console.log("target->", e.target.dataset.id, e.target.dataset.name)
  
    toast.success(e.target.dataset.name + '添加成功', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
    // 提交数据
    const data = {
      "product_id": e.target.dataset.id,
    }
    submitToCart(data)
    isClicked()
  
  }
  
  // 
  const submitToCart = async (data) => {
    // 当前的购物车id （可以切换购物车）
    console.log("ready to submit -->", data)
    const cartId = localStorage.getItem('CART_ID')
    try {
        // 提交到服务器
        axios.post(apiHost + "/v1/client/pos/cart?cartId=" + cartId, data,{ withCredentials: false }).then(
            res => {
            console.log("progress return  ==>", res.data)
            const rsp = res.data
            localStorage.setItem('CART_ID', rsp.cart_id)
            }
        ).catch(err => {
            console.log("err is->", err)
        })
  
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className="details">
      <img src={imgSrc} alt="" className="details-img" />
      <div className="food-name">
        <h2>{title}</h2>
      </div>

      <div className="food-details">
        <div>
          <p>
            单价: {price}
          </p>
          <p>库存: {sku}</p>
        </div>
      </div>

      <div className="cart-btn">
        {/* <button onClick={handleClick} className="btn">
          Add to cart
        </button> */}
        <button onClick={notifyAndSubmit} className="btn" data-name={title} data-id={product_id}>加入购物车</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default FoodBox;
