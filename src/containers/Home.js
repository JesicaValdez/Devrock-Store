import React from "react";
import "../assets/css/Home.css";
import Item from "../components/Item";
export default function Home() {
    return (
        <>
        <div classNameName="container">
            <div className="wraper">
                <div class="home">
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </div>
            </div>
        </div>
    </>
    );
}
