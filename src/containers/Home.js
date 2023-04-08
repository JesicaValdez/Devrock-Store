import React, { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import "../assets/css/Home.css";
import Item from "../components/Item";
export default function Home() {
    useEffect(()=>{
        listameProductos();
    }, []);
    const { listameProductos, productos } = useContext(Contexto);
    return (
        <>
        <div classNameName="container">
            <div className="wraper">
                <div className="home">
                    {productos.map((item)=>(
                        <Item {...Item} key={item.id}></Item>
                    ))
                    }
                </div>
            </div>
        </div>
    </>
    );
}
