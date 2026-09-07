import dynamic from "next/dynamic";

const Catalogo = dynamic(() => import("catalogo/Catalogo"), {
  ssr: false,
});

const Pedido = dynamic(() => import("pedido/Pedido"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <h1>Micro Frontends</h1>
      <Catalogo />
      <Pedido />
    </>
  );
}
