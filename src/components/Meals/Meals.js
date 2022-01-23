import MealsSummay from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
        <MealsSummay />
        <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
