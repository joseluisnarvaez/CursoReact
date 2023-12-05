
import CardGroup from 'react-bootstrap/esm/CardGroup';
import { Item } from './Item';

const ItemContainer = ({productos}) => {

    return (
      <>
      <CardGroup>
      { productos.map(product => 
        <Item key={product.id} product= {product}/>
       )}
       </CardGroup>
       </>
    );
    
};

export default ItemContainer;
