const Meal = ({ meal, cart, setCart }) => {
  return (
    <article onClick={() => {}}>
      <div>
        <h3>{meal.title}</h3>
        <p className="description-meal">{meal.description}</p>
        <div className="price">
          <p>{meal.price} €</p>
          {meal.popular && <p className="populaire">Populaire</p>}
        </div>
      </div>
      {meal.picture && <img src={meal.picture} alt={meal.title} />}
    </article>
  );
};

export default Meal;
