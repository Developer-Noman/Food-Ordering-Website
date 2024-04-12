import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import Cartcontext from "../../store/Cart-context"

const HeaderCartButton = props=>{
 const cartCtx = useContext(Cartcontext);
 const numbersItems= cartCtx.items.reduce((Crntno,item)=>
 {
    return Crntno+item.amount;
 },0);

return(
<button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}>
<CartIcon/>
</span>
<span>My cart</span>
<span className={classes.badge}>{numbersItems}</span>


</button>





)
}

export default HeaderCartButton;