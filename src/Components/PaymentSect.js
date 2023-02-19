import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const SampleData = [
  {
    "name": "螺蛳粉",
    "number": 3,
    "price": 12.90,
    "product_id": "p001"
  },
  {
    "name": "木薯羹",
    "number": 2,
    "price": 22.90,
    "product_id": "p002"
  }
]

function PaymentSect() {
  return (
      <div className="payment">
        <div className="name">
          <h4>品项</h4>
          <p>数量</p>
          <p>价格</p>
        </div>

      <div className="price">
        {
         SampleData.map(m => {
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
              <p className="space">$0</p>
              <p>$14.84</p>
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
