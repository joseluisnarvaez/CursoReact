import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDataByID } from '../../fuctions/MFetch'
import { Loading } from '../Loading/Loading'

export const ItemDetailContainer = () => {
    const [producto, setProducto ]= useState({})
    const [ loading, setLoading ] = useState(true)
    const {pid} = useParams();

    useEffect( () => {
        getDataByID(pid)
        .then(res => setProducto(res))
        .catch(err => console.log(err))
        .finally(() =>setLoading(false))
    },[])

  return (
    <>
    {
      loading ? <Loading/> :
      <ItemDetail producto = {producto} />
    }
    </>
  )
}
