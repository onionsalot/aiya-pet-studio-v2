import { useEffect, useState } from "react";
import * as itemsAPI from "../../../utilities/items-api";
import * as categoryService from '../../../utilities/categories-api';
import "./NewItemPage.scss";

export default function NewItemPage() {
  const [categories, setCategories] = useState([])
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

  useEffect(() => {
		async function getCat() {
			await categoryService.getAll().then((res) => {
				const mappedCategories = res.response.map((e) => {
          return <option value={e.name}>{e.name}</option>
        })
        setCategories(mappedCategories)
			})
		}

		getCat()
	}, [])

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
          name="options"
          value={form.options}
          onChange={handleChange}
        />
        <label>Options</label>
          <select name="options">
            {categories}
          </select>
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
          name="images"
          value={form.images}
          onChange={handleChange}
        />
        <button type="submit">ADD ITEM</button>
      </form>
    {error}
    </>
  );
}
