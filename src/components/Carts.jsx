const Card = ({ cart, setCart }) => {
  const handleAddToCart = () => {
    const copyCart = [...cart];
    copyCart.push({ ...meal, quantity: 1 });
    setCart(copyCart);
  };
  return (
    <section className="cart">
      {cart.length === 0 ? (
        <p>Votre panier est vide !</p>
      ) : (
        <>
          <div>
            {cart.map((meal) => {
              return (
                <div key={meal.id}>
                  <span>{meal.title}</span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};
export default Card;
