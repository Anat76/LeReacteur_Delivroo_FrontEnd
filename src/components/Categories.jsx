import Meal from "./Meal";
import Carts from "./Carts";

const Categories = ({ data, cart, setCart }) => {
  //   console.log(data);

  return (
    <main>
      <div className="global-container">
        <section className="left">
          {data.categories.map((category) => {
            if (category.meals.length !== 0) {
              return (
                <div key={category.name}>
                  <h2>{category.name}</h2>
                  <div className="meal-container">
                    {category.meals.map((meal) => {
                      //   console.log(meal);
                      return (
                        <Meal
                          key={meal.id}
                          meal={meal}
                          cart={cart}
                          setCart={setCart}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>
        <section className="right">
          <Carts cart={cart} setCart={setCart} meal={data.categories.meal} />
        </section>
      </div>
    </main>
  );
};
export default Categories;
