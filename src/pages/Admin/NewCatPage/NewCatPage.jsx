import { useEffect, useState } from "react";
import * as categoriesAPI from "../../../utilities/categories-api";
import "./NewCatPage.scss";

export default function NewCatPage() {
  const [form, setForm] = useState({
    name: "",
  });
  const [error, setError] = useState("")
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const newCat = await categoriesAPI.create(form)
    if (newCat.success === true && newCat.msg === "OK") {
      setError("New Category Added!")
    } else {
      setError("Failed to add anything")
    }
  }

  return (
    <>
      <h1>New Cat Page</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <button type="submit">ADD CATEGORY</button>
      </form>
      {error}
    </>
  );
}
