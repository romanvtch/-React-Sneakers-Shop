import Header from "./Components/Header";
import Card from "./Components/Card";
import Drawer from "./Components/Drawer";

function App() {
  const arr = [
    {
      imgUrl: "/img/sneakers/1.jpg",
      title: "Чоловічі кросівки Nike Blazer Mid Suede",
      price: 12999,
    },

    {
      imgUrl: "/img/sneakers/2.jpg",
      title: "Чоловічі кросівки Nike Air Max 270",
      price: 12999,
    },

    {
      imgUrl: "/img/sneakers/3.jpg",
      title: "Чоловічі кросівки Nike Blazer Mid Suede",
      price: 8499,
    },
    {
      imgUrl: "/img/sneakers/4.jpg",
      title: "Кросівки Puma X Aka Boku Future Rider",
      price: 8999,
    },
    {
      imgUrl: "/img/sneakers/5.jpg",
      title: "Чоловічі кросівки Under Armour Curry 8",
      price: 8999,
    },
    {
      imgUrl: "/img/sneakers/6.jpg",
      title: "Кросівки Puma X Aka Boku Future Rider",
      price: 8999,
    },
    {
      imgUrl: "/img/sneakers/7.jpg",
      title: "Чоловічі кросівки Jordan Air Jordan 11",
      price: 8999,
    },
    {
      imgUrl: "/img/sneakers/8.jpg",
      title: "Чоловічі кросівки Nike LeBron XVIII",
      price: 8999,
    },
    {
      imgUrl: "/img/sneakers/9.jpg",
      title: "Чоловічі кросівки Nike Lebron XVIII Low",
      price: 13999,
    },
    {
      imgUrl: "/img/sneakers/10.jpg",
      title: "Чоловічі кросівки Nike Blazer Mid Suede",
      price: 8499,
    },
    {
      imgUrl: "/img/sneakers/11.jpg",
      title: "Кросівки Puma X Aka Boku Future Rider",
      price: 8999,
    },
    {
      imgUrl: "/img/sneakers/12.jpg",
      title: "Чоловічі кросівки Nike Kyrie Flytrap IV",
      price: 11299,
    },
  ];

  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content">
        <div className="titleAndSearch">
          <h1>Всі товари</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." />
          </div> 
        </div>

        <div className="sneakers">
          
          {arr.map((obj,index) => (
            <Card 
            key={index}
            title={obj.title} 
            price={obj.price} 
            imgUrl={obj.imgUrl} 
            onClick={() => console.log(obj)}
            />
            
          ))}

        </div>
      </div>
    </div>
  )
};

export default App;
