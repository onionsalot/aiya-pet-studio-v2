import { useEffect, useState } from "react";
// import * as itemsAPI from "../../utilities/items-api";
import "./NewItemPage.scss";

export default function NewItemPage() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    tags: "",
    type: "",
    images: "",
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit() {}

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
          value={form.name}
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
          value={form.name}
          onChange={handleChange}
          required
        />
        <label>tags</label>
        <input
          type="text"
          name="tags"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label>type</label>
        <input
          type="text"
          name="type"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label>images</label>
        <input
          type="text"
          name="tags"
          value={form.name}
          onChange={handleChange}
          required
        />
      </form>
    </>
  );
}
