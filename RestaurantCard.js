const RestaurantCard = ({ resObj }) => {
  // Destructuring the object
  const { id, name, cuisine, rating, prepTimeMinutes, mealType } = resObj;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={name}
        src={`https://cdn.dummyjson.com/recipe-images/${id}.webp`}
      />
      <h1>{name}</h1>
      <h2>{cuisine}</h2>
      <h2>{rating}* </h2>
      <h2>{prepTimeMinutes} mins</h2>
      <h2>{mealType}</h2>
    </div>
  );
};

export default RestaurantCard;
