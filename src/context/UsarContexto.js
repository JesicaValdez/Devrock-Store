import Contexto from "./Contexto";

export default function UsarContexto(props){
    const { Children } = props;
    const estadoInicial ={
        producto: [],
        carrito:[],
    }
    const listameProductos = async () => {};
    const agregarCarrito = () => {};
    const eliminarCarrito = () => {};
    return (
            <Contexto.Provider value={{
                productos: state.productos,
                carrito: state.carrito,
                listameProductos,
                agregarCarrito,
                eliminarCarrito
            }}>
                {Children}
                </Contexto.Provider>
    )    
}