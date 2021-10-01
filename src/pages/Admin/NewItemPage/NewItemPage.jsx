import { useEffect, useState } from "react";
import * as itemsAPI from "../../../utilities/items-api";
import "./NewItemPage.scss";

export default function NewItemPage() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: 0,
    description: "",
    tags: [],
    options: [],
    type: true,
    images: [],
  });
  const [error, setError] = useState("")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const newCat = await itemsAPI.create(form)
    if (newCat.success === true && newCat.msg === "OK") {
      setError("New Item Added!")
    } else {
      setError("Failed to add anything")
    }
  }


  return (
    <>
      <h1>New Item Page</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <label>tags</label>
        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
        />
        <label>options</label>
        <input
          type="text"
          name="tags"
          value={form.options}
          onChange={handleChange}
        />
        <label>type</label>
        <input
          type="text"
          name="type"
          value={form.type}
          onChange={handleChange}
          required
        />
        <label>images</label>
        <input
          type="text"
          name="tags"
          value={form.images}
          onChange={handleChange}
        />
        <button type="submit">ADD ITEM</button>
      </form>
    {error}
    </>
  );
}
