import { useEffect} from "react";
import { useState } from "react";
import ItemContainer from "../ItemContainer/ItemContainer";
import CardGroup from 'react-bootstrap/CardGroup';
import { getData, getDataByCategoria } from "../../fuctions/MFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = ({saludo}) => {
 const [ productos, setProductos ] = useState([])
    
 const {cid} = useParams()

    useEffect(()=>{
        if(cid){
            getDataByCategoria(cid)
            .then(res => {
                setProductos(res);
              })
            .catch(err => console.log(err))
            console.log(productos)
        }
        else {
            getData()
            .then(res => setProductos(res))
            .catch(err => console.log(err))
        }
        
    }, [cid])
    
    return (
        
           <div>
            <h2 className="text-center">{ saludo }</h2>
            
             <ItemContainer productos={productos}/>
            
        </div>
        
    );
};

export default ItemListContainer;
