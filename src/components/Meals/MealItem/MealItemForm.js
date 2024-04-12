import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";
import { useRef,useState } from "react";

const MealItemForm = props => {

const [amountIsValid, setAmountIsvalid]=useState(true);

    const submithandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsvalid(false) 
            return;
        }
 props.onAddToCart(enteredAmountNumber)
    }



    const amountInputRef = useRef();
    return (
        <form className={classes.form} onSubmit={submithandler}>
            <Input
                ref={amountInputRef}
                label="Amount" input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>please set valid amount</p>}
        </form>


    )
}

export default MealItemForm;