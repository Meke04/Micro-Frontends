import { useEffect, useState } from "react";
import styles from "../styles/Pedido.module.css";

export default function Pedido() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const adicionarPedido = (event) => {
            setPedidos((pedidosAtuais) => [
                ...pedidosAtuais,
                event.detail
            ]);
        };

        window.addEventListener("addToCart", adicionarPedido);

        return () => {
            window.removeEventListener("addToCart", adicionarPedido);
        };
    }, []);

    return (
        <div className={styles.pedido}>
            <h1>Seu Pedido</h1>

            <ul className={styles.pedidoLista}>
                {pedidos.map((pedido, index) => (
                    <li className={styles.itemPedido} key={index}>
                        <h3>{pedido.nome}</h3>
                        <p>{pedido.descricao}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}