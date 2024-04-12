import { useContext } from "react";
import Cartcontext from "../../../store/Cart-context";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";

const MealItem = props =>{
    const price= `$${props.price}`;
   const cartctx= useContext(Cartcontext)

    const addToCartHandler=amount=>{
        cartctx.addItem({
id:props.id,
name:props.name,
amount:amount,
price:props.price
        })
    }


    return(
    <li className={classes.meal}>
    <div >
     <h3>{props.name}</h3>
     <div className={classes.description}>{props.description}</div>
     <div className={classes.price}>{price}</div>
    </div>
    <div><MealItemForm onAddToCart={addToCartHandler}/></div>
    </li>


    )
}

export default MealItem;