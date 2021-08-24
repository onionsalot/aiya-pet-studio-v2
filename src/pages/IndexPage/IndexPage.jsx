import { useEffect, useState } from "react";
import * as itemsAPI from "../../utilities/items-api";
import "./IndexPage.scss";

export default function IndexPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getItem() {
      const response = await itemsAPI.getAll();
      setItems(response);
      console.log(response)
    }
    getItem();
  }, []);


  return (
    <>
      <h1>Index Page</h1>
    </>
  );
}
