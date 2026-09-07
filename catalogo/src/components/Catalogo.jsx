import styles from "../styles/Catalogo.module.css";

export default function Catalogo() {
    const pratos = [
        {
            nome: "Hambúrguer",
            descricao: "Hambúrguer artesanal com queijo e salada."
        },
        {
            nome: "Pizza",
            descricao: "Pizza de mussarela com molho de tomate."
        },
        {
            nome: "Lasanha",
            descricao: "Lasanha à bolonhesa com queijo."
        }
    ];

    return (
        <div className={styles.catalogo}>
            <h2>Catálogo</h2>

            <ul className={styles.catalogoLista}>
                {pratos.map((prato) => (
                    <li className={styles.prato} key={prato.nome}>
                        <h3>{prato.nome}</h3>
                        <p>{prato.descricao}</p>

                        <button
                            onClick={() =>
                                window.dispatchEvent(
                                    new CustomEvent("addToCart", {
                                        detail: prato
                                    })
                                )
                            }
                        >
                            Adicionar ao pedido
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}