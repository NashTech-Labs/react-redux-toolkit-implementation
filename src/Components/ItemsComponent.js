import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store";
import './Item.module.css';



function ItemsComponent() {

    const dispatch = useDispatch();
    const item = useSelector((state) => state.itemStore.items); 

    const removeItem = (id) => {
        dispatch(itemAction.removeItem(id));
    }

  return (
    <>
   { item.length > 0 && <div  style={{marginTop:'10px'}} className="container">
        <ul>
            {item.map((item) => (
            <li key={item.id}>
                <span> {item.name} </span>
                <button onClick={() =>removeItem(item.id)}>Remove</button>
            </li>
            ))}
        </ul>
     
    </div>
    } 
    { item.length === 0 && <div style={{marginTop:'10px'}} className="container">
        <p> No Items </p>
    </div>
    }

</>

  );
}


export default memo(ItemsComponent);