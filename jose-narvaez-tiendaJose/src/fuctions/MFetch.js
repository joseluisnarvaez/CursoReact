const product = [
    {
      "id": "1",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0595/9915/9452/files/01_tipos_de_gorras_con_estructura.jpg?v=1677898928",
      "name": "Producto 1",
      "price": 19.99,
      "stock": 10,
      "description": "Descripción del Producto 1",
      "categoria":"gorras"
    },
    {
      "id": "2",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0595/9915/9452/files/01_tipos_de_gorras_con_estructura.jpg?v=1677898928",
      "name": "Producto 2",
      "price": 29.99,
      "stock": 15,
      "description": "Descripción del Producto 2",
      "categoria":"gorras"
    },
    {
      "id": "3",
      "imageUrl": "https://cdn.shopify.com/s/files/1/0595/9915/9452/files/01_tipos_de_gorras_con_estructura.jpg?v=1677898928",
      "name": "Producto 3",
      "price": 39.99,
      "stock": 8,
      "description": "Descripción del Producto 3",
      "categoria":"gorras"
    },
    {
      "id": "4",
      "imageUrl": "https://www.gustore.cl/temp/img/poleras/poleraNegra_800x859.png?v=new7",
      "name": "Producto 4",
      "price": 49.99,
      "stock": 20,
      "description": "Descripción del Producto 4",
      "categoria":"poleras"
    },
    {
      "id": "5",
      "imageUrl": "https://tworldstore.cl/3148-zoom/polera-polo-m-c-100-algodon-170g-certificada-blanco-t-xs.jpg",
      "name": "Producto 5",
      "price": 59.99,
      "stock": 12,
      "description": "Descripción del Producto 5",
      "categoria":"poleras"
    }
  ];
  


export const getData = () => new Promise((res, rej) => {
    setTimeout(()=>{
        res(product)
    })
})

export const getDataByID = (id) => new Promise((res) => {
    setTimeout(()=>{
        res(product.find( producto => producto.id === id))
    })
})
export const getDataByCategoria = (categoria) => new Promise((res) => {
  setTimeout(()=>{
    const productosFiltrados = product.filter(producto => producto.categoria === categoria);
    res(productosFiltrados);
  })
})