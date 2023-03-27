import Card from "../Components/Card/Card";
function Favorites({items, onAddToFavorite}) {
  return (
    <div className="content">
      <div className="titleAndSearch">
        <h1>Мої збережені</h1>
      </div>

      <div className="sneakers">
        {items.map((item, index) => (
          <Card
            key={index}
            // id={item.id}
            // title={item.title}
            // price={item.price}
            // imgUrl={item.imgUrl}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
