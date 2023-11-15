import { Item } from './Item';
import CardGroup from 'react-bootstrap/esm/CardGroup';

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
