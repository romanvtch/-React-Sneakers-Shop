import Header from "./Components/Header";
import Card from "./Components/Card";
import Drawer from "./Components/Drawer";


function App() {
  return (
    <div className="wrapper">
      <Drawer/>
      <Header/>
      <div className="content">
        <div className="nameAndSearch">
          <h1>Всі товари</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." />
          </div>
        </div>

        <div className="sneakers">
        <Card/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
