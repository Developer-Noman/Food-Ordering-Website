import classes from "./Checkout.module.css"
import { useRef, useState } from "react";


const Checkout = props =>{
  
const[formInputValidity, setFormInputValidity]=useState({
name:true,
street:true,
postalCode:true,
city:true
})


  const isEmpty=value=> value.trim()=='';
  const isFiveChars=value=>value.trim().length==5;

const nameInputRef= useRef();
const streetInputRef= useRef();
const postalInputRef= useRef();
const cityInputRef= useRef();

const confirmHandler=(event)=>{
event.preventDefault();
const enteredName= nameInputRef.current.value;
const enteredStreet=streetInputRef.current.value;
const enteredPostalCode=postalInputRef.current.value;
const enteredCity=cityInputRef.current.value;




const enteredNameIsValid= !isEmpty(enteredName);
const enteredStreetIsValid= !isEmpty(enteredStreet);
const enteredCityIsValid= !isEmpty(enteredCity);
const enteredPostalCodeIsValid= isFiveChars(enteredPostalCode);

setFormInputValidity({
  name:enteredNameIsValid,
  city:enteredCityIsValid,
  postalCode:enteredPostalCodeIsValid,
  street:enteredStreetIsValid
  
  })

const formIsValid= enteredNameIsValid && enteredStreetIsValid && enteredPostalCode && enteredCityIsValid; 

if(!formIsValid){

  return
}

}
const nameControlClass=`${classes.control} ${formInputValidity.name ? "": classes.invalid  }`;
const streetControlClass=`${classes.control} ${formInputValidity.street ? "": classes.invalid  }`;
const cityControlClass=`${classes.control} ${formInputValidity.city ? "": classes.invalid  }`;
const postalcodeControlClass=`${classes.control} ${formInputValidity.postalCode ? "": classes.invalid  }`;

    return(
    <>
   <form onSubmit={confirmHandler}> 
 <div className={nameControlClass} >
  <label htmlFor="name">Name</label>
  <input type="text" id="name" ref={nameInputRef}></input>
  {!formInputValidity.name && <p>Enter valid name</p>}
  </div>
  <div className={streetControlClass} >
  <label htmlFor="street">Street</label>
  <input type="text" id="street" ref={streetInputRef}></input>
  {!formInputValidity.street && <p>Enter valid name</p>}
  </div>
  <div className={postalcodeControlClass}>
  <label htmlFor="postal">Postal Code</label>
  <input type="text" id="postal" ref={postalInputRef}></input>
  {!formInputValidity.postalCode && <p>Enter valid name</p>}
  </div>
  <div className={cityControlClass}> 
  <label htmlFor="city" ref={cityInputRef}>City</label>
  <input type="text" id="city"></input>
  {!formInputValidity.city && <p>Enter valid name</p>}
  </div>
  <div className={classes.actions}>
  <button type='text' onCancel={props.onCancel}>Cancel</button>
  <button onSubmit={confirmHandler}>Confirm</button>
  </div>
  </form>
</>

    )


}

export default Checkout