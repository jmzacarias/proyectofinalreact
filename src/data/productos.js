export const productos = [
    {
        id: 1,
        name: 'Papa',
        stock: 10,
        price: 200,
        img: 'https://walmartar.vteximg.com.br/arquivos/ids/844945-1000-1000/Papa-Negra-X-1-Kg-1-24528.jpg?v=636891453520130000',
        description: 'Papa negra, oriunda de la región andina con 4 años de fermentación en barrica de oro',
        category: 'verdura'
    },
    {
        id: 2,
        name: 'Tomate',
        stock: 8,
        price: 400,
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_735088-MLA46857749434_072021-F.webp',
        description: 'Tomate redondo sobrante de la fiesta de la tomatina en Buñol, España',
        category: 'fruta'
    },
    {
        id: 3,
        name: 'cebolla',
        stock: 7,
        price: 300,
        img: 'https://5aldia.cl/wp-content/uploads/2018/03/cebolla.jpg',
        description: 'Cebolla blanca proveniente del Oeste de Noruega',
        category: 'verdura'
    },
    {
        id: 4,
        name: 'banana',
        stock: 12,
        price: 146,
        img: 'https://walmartar.vteximg.com.br/arquivos/ids/837323-1000-1000/Banana-X-1-Kg-1-16811.jpg?v=636703749099070000',
        description: 'Banana ecuatoriana',
        category: 'fruta'
    },
    {
        id: 5,
        name: 'acelga',
        stock: 4,
        price: 98,
        img: 'https://walmartar.vteximg.com.br/arquivos/ids/844938-1000-1000/Acelga-En-Paquete-X-500-Gr-1-17540.jpg?v=636891453503430000',
        description: 'Acelga bicolor de los campos Eliseos',
        category: 'verdura'
    },
    {
        id: 6,
        name: 'zanahoria',
        stock: 10,
        price: 270,
        img: 'https://cdn2.salud180.com/sites/default/files/field/image/2019/04/propiedades-zanahoria.jpg',
        description: 'Zanahoria naranja',
        category: 'hortaliza'
    },
    {
        id: 7,
        name: 'esparrago',
        stock: 7,
        price: 300,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiG7voeDJJak34YERZs9CBSlFtWsmNS7-j7FPno10y0eqT9pKyQm_0MTi_GKDv3DSOUg&usqp=CAU',
        description: 'Espárragos nativos de Iquique',
        category: 'hortaliza'
    },
];

export const traerProductos = ()=>{
    return new Promise((res) => {
    setTimeout(() => {
        res(productos);
    }, 1000);
});
}

export const traerProducto = (id)=> {
    return new Promise ((res)=>{
        const producto = productos.find(p => p.id == id)
        setTimeout(()=>{
            res(producto)
        },2000)
    })
}

export const traerProductosPorCategoria = (category)=> {
    return new Promise ((res)=>{
        const productosPorCategoria = productos.filter(p => p.category == category)
        setTimeout(()=>{
            res(productosPorCategoria)
        },2000)
    })
}