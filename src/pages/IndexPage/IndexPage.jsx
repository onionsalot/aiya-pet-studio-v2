import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList"
import "./IndexPage.scss";

export default function IndexPage({ items, currentCategory }) {
  const [displayedItems, setDisplayedItems] = useState()
  
  return (
    <>
      <h1>Index Page</h1>
      <ItemList items={ items } currentCategory={ currentCategory }/>
    </>
  );
}
