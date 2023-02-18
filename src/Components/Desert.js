import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import cards from "../img/card2.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";


function Desert() {
    return (
        <>
            <div className="foodcontainer">
                <div className="left-side">
                    <div className="cards">
                        <div className="all">
                            <div className="varieties">
                                <Link to="/" className="var-btn">
                                推荐
                                </Link>
                                <Link to="/african" className="var-btn">
                                饮料
                                </Link>
                                <Link to="/chinese" className="var-btn">
                                分类
                                </Link>
                                <Link to="/italian" className="var-btn">
                                套餐
                                </Link>
                                <Link to="/desert" className="var-btn">
                                卤菜
                                </Link>
                                <Link to="/desert" className="var-btn">
                                配菜
                                </Link>
                                <Link to="/desert" className="var-btn">
                                特色
                                </Link>
                                <Link to="/desert" className="var-btn">
                                饮料
                                </Link>
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
