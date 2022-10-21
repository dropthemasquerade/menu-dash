import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import cards from "../img/chine.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";


function Chinese() {
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
                            <FoodBox imgSrc={cards} title={"Chinese 1"} price={"$10"}/>
                            <FoodBox imgSrc={cards} title={"Chinese 2"} price={"$25"}/>
                            <FoodBox imgSrc={cards} title={"Chinese 3"} price={"$15"}/>
                            <FoodBox imgSrc={cards} title={"Chinese 4"} price={"$17"}/>
                            <FoodBox imgSrc={cards} title={"Chinese 5"} price={"$20"}/>
                            <FoodBox imgSrc={cards} title={"Chinese 6"} price={"$24"}/>
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

export default Chinese;
