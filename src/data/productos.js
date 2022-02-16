export const productos = [
    {
        id: 1,
        name: 'Papa',
        stock: 10,
        price: 200,
        img: 'https://walmartar.vteximg.com.br/arquivos/ids/844945-1000-1000/Papa-Negra-X-1-Kg-1-24528.jpg?v=636891453520130000'
    },
    {
        id: 2,
        name: 'Tomate',
        stock: 8,
        price: 400,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_735088-MLA46857749434_072021-F.webp'
    },
    {
        id: 3,
        name: 'cebolla',
        stock: 7,
        price: 300,
        img: 'https://5aldia.cl/wp-content/uploads/2018/03/cebolla.jpg'
    },
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});