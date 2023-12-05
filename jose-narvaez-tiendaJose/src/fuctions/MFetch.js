import { getAllProduct, getProductByCategory, getProductById } from "./FirebasesConf";


export const getData = () => new Promise((res, rej) => {
  res(getAllProduct())
})

export const getDataByID = (id) => new Promise((res) => {
  res(getProductById(id))
})
export const getDataByCategoria = (categoria) => new Promise((res) => {
 res(getProductByCategory(categoria))
})
