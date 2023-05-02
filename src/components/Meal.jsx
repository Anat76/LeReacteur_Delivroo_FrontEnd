const Meal = ({ meal }) => {
  return (
    <article>
      <div>
        <h3>{meal.title}</h3>
        <p className="description-meal">{meal.description}</p>
        <p>{meal.price} €</p>
        {meal.popular && <p>Populaire</p>}
      </div>
      {meal.picture && <img src={meal.picture} alt={meal.title} />}
    </article>
  );
};

export default Meal;
