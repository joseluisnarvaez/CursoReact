import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDataByID } from '../../fuctions/MFetch'

export const ItemDetailContainer = () => {
    const [producto, setProducto ]= useState({})
    const {pid} = useParams();

    useEffect( () => {
        getDataByID(pid)
        .then(res => setProducto(res))
        .catch(err => console.log(err))
    },[])

  return (
    <ItemDetail producto = {producto} />
  )
}
