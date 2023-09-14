import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const loadedData = [];

    const fetchingData = async () => {
      const response = await fetch(
        "https://react-http-9f1bd-default-rtdb.firebaseio.com/Dummy_meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      console.log("repsonse", responseData);

      for (const item in responseData) {
        //We are using this for-in loop to convert the loaded object into an array.
        loadedData.push({
          id: item,
          name: responseData[item].name,
          description: responseData[item].description,
          price: responseData[item].price,
        });
      }
      console.log("loadedData", loadedData);
      setMeals(loadedData);
      setIsLoading(false);
    };

      fetchingData().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });

  }, []);

  if (isLoading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      />
    );
  });

  return (
    <>
      <section className={styles.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
