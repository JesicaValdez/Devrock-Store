import React, { useContext } from "react";
import "../assets/css/Item.css";
import Contexto from "../context/Contexto";
export default function Item(props) {
    const { nombre, precios, medidas, img, id } = props
    const { agregarCarrito } = useContext(Contexto);
    return (
            <>
                <div className="home-item">
                    <img src={img} alt="" className="home-item-img"/>
                    <div className="home-item-info">
                            <h1 className="home-item-titulo"> {nombre}</h1>
                            <p className="home-item-medidas">Medidas: {medidas}</p>
                            <div className="home-item-actions">
                                <h3 className="home-item-precio">AR$ {precios}</h3>
                                <button className="home-item-comprar" 
                                onClick={()=>{ agregarCarrito(id);
                                }}
                                >
                                +
                                </button>
                            </div>
                    </div>
                </div>
            </>
    );
}