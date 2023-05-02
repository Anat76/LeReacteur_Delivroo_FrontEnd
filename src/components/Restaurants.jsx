const Restaurant = ({ data }) => {
  return (
    <header className="global-container">
      <div>
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>
      <div>
        <img src={data.restaurant.picture} alt="" />
      </div>
    </header>
  );
};
export default Restaurant;
