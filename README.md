# Micro Frontends

Projeto desenvolvido utilizando a arquitetura de **Micro Frontends** e **Module Federation**, dividido em três aplicações:

- **Container**: aplicação principal e integração dos micros.
- **Catálogo**: responsável pela exibição do catálogo.
- **Pedido**: responsável pelo gerenciamento dos pedidos.

## Portas

| Aplicação | Porta |
|---|---:|
| Container | 3000 |
| Catálogo | 3001 |
| Pedido | 3002 |

## Como executar

Instale as dependências em cada aplicação:

```bash
cd container
npm install

cd ../catalogo
npm install

cd ../pedido
npm install
```

Depois, execute cada aplicação em um terminal separado:

```bash
# Container
cd container
npm run dev

# Catálogo
cd catalogo
npm run dev

# Pedido
cd pedido
npm run dev
```

O Container será executado na porta 3000, o Catálogo na 3001 e o Pedido na 3002.