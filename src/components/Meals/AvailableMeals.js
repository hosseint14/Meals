import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DummyMeals = [
  {
    Id: "m1",
    name: "Kebab",
    description: "made by meat",
    price: 22.95,
  },
  {
    id: "m2",
    name: "Dolme",
    description: "made by vegetable and meat",
    price: 20.98,
  },
];

const AvailableMeals = () => {
  const mealsList = DummyMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
