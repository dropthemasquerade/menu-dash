import React from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import cards from "../img/afri.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";



function African() {

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
                            <FoodBox imgSrc={cards} title={"African 1"} price={"$12"} />
                            <FoodBox imgSrc={cards} title={"African 2"} price={"$12"} />
                            <FoodBox imgSrc={cards} title={"African 3"} price={"$20"} />
                            <FoodBox imgSrc={cards} title={"African 4"} price={"$12"} />
                            <FoodBox imgSrc={cards} title={"African 5"} price={"$17"} />
                            <FoodBox imgSrc={cards} title={"African 6"} price={"$25"} />

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

export default African;
