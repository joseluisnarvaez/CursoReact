import { useEffect, useState} from "react";
import ItemContainer from "../ItemContainer/ItemContainer";
import { getData, getDataByCategoria } from "../../fuctions/MFetch";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";

const ItemListContainer = ({saludo}) => {
 const [ productos, setProductos ] = useState([])
 const [ loading, setLoading ] = useState(true)
 const {cid} = useParams()
 console.log(loading)
    useEffect(()=>{
        if(cid){
            getDataByCategoria(cid)
            .then(res => {
                setProductos(res);
              })
            .catch(err => console.log(err))
            .finally(() =>setLoading(false))
        }
        else {
            getData()
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() =>setLoading(false))
        }21
        
    }, [cid,loading])
    
    return (
        
           <div>
            <h2 className="text-center">{ saludo }</h2>
            {
                loading ? <Loading/> :
                <ItemContainer productos={productos}/>
            }
            
             
            
        </div>
        
    );
};

export default ItemListContainer;
