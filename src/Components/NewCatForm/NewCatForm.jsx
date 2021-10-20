import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import * as categoriesAPI from "../../utilities/categories-api";

export default function NewCatForm() {
  const data = useLocation();
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
  useEffect(() => {
    if(data.state) {
      setForm({name:data.state.name})
    } else {
      setForm({name: ""})
    }
  },[data.state])

  return (
    <>
      {data.state? <h1>Update Cat Page</h1>: <h1>New Cat Page</h1>}
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
