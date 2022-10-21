import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import cards from "../img/ital.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";


function Italian() {
    return (
        <>
            <div className="foodcontainer">
                <div className="left-side">
                    <div className="cards">
                        <div className="all">
                            <div className="varieties">
                                <Link to="/" className="var-btn">
                                    All
                                </Link>
                                <Link to="/african" className="var-btn">
                                    African
                                </Link>
                                <Link to="/chinese" className="var-btn">
                                    Chinese
                                </Link>
                                <Link to="/italian" className="var-btn">
                                    Italian
                                </Link>
                                <Link to="/desert" className="var-btn">
                                    Desert
                                </Link>
                            </div>
                        </div>

                        <main>
                            <FoodBox imgSrc={cards} title={"Italian 1"} price={"$28"}/>
                            <FoodBox imgSrc={cards} title={"Italian 2"} price={"$10"}/>
                            <FoodBox imgSrc={cards} title={"Italian 3"} price={"$15"}/>
                            <FoodBox imgSrc={cards} title={"Italian 4"} price={"$32"}/>
                            <FoodBox imgSrc={cards} title={"Italian 5"} price={"$20"}/>
                            <FoodBox imgSrc={cards} title={"Italian 6"} price={"$15"}/>
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

export default Italian;
