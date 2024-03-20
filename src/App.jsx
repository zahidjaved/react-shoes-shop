import { useState } from "react";
import "./App.css";
import Navigation from "./assets/Navigation/Nav";
import Product from "./assets/Products/Product";
import Recommneded from "./assets/Recommneded/Recommneded";
import Sidebar from "./assets/Sidebar/Sidebar";
import products from "./assets/Dp/Dp";
import Card from "./component/Card";

function App() {
  const [selectCategory, setSelectCategory] = useState(null);
  const [query, setQuery] = useState("");

  // for input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filterItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // for Radio input
  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  };

  // for Button click
  const handleClick = (event) => {
    setSelectCategory(event.target.value);
  };
  // main filtering function
  function filterData(products, selected, query) {
    let filterProducts = products;

    //  filtering inputs items
    if (query) {
      filterProducts = filterItems;
    }

    if (selected) {
      filterProducts = filterProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company===selected||newPrice===selected||title===selected);
    }

    return filterProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
      <Card key={Math.random()}
       img={img}
       title={title}
       star={star}
       reviews={reviews}
       newPrice={newPrice}
       prevPrice={prevPrice}
      />
    ))
  }

const result =   filterData(products,selectCategory,query)





  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommneded handleClick={handleClick}/>
      <Product result={result} />
    </>
  );
}

export default App;
