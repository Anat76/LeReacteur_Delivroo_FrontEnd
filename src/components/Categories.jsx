import Meal from "./Meal";

const Categories = ({ data }) => {
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
                  {category.meals.map((meal) => {
                    //   console.log(meal);
                    return <Meal key={meal.id} meal={meal} />;
                  })}
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>
        <section className="right"></section>
      </div>
    </main>
  );
};
export default Categories;
