
import { Fragment } from "react";
import mealImage from "../assests/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"


const Header = props =>{
return(
<>
<header className={classes.header}>
<h1>Reactmeals</h1>
<HeaderCartButton onClick={props.onShow}/>
</header>
<div className={classes['main-image']}>

<img src={mealImage} alt="loading"/>
</div>



</>
)}

export default Header;