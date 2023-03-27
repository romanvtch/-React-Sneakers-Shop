import Card from "../Components/Card/Card";
function Home({ items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart ,
    }){
    return (
        <div className="content">
        <div className="titleAndSearch">
          <h1>
            {searchValue ? `Пошук по запросу: ${searchValue}` : "Всі товари"}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => {
                  setSearchValue("");
                }}
                height={14}
                className="clear"
                src="/img/close.png"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Пошук..."
            />
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                // title={item.title}
                // price={item.price}
                // imgUrl={item.imgUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                {...item}
              />
            ))}
        </div>
      </div>
    )
}
export default Home;