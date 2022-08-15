import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";



const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [isError, setIsError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;
    const inputAmountNumber = +inputAmount;

    if (
      inputAmount.trim().length === 0 ||
      inputAmountNumber < 1 ||
      inputAmountNumber > 5
    ) {
      setIsError(true);
      return;
    }
    props.onAddToCart(inputAmountNumber);
    console.log("Submitted");
  };

  return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: `amount_${props.id}`,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add </button>
		  {isError && <div> Please enter a valid amount (1-5). </div>}
      </form>

  );
};

export default MealItemForm;
