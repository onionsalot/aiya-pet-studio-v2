import { useEffect, useState } from "react";
// import * as itemsAPI from "../../utilities/items-api";
import "./NewCatPage.scss";

export default function NewCatPage() {
    const [form, setForm] = useState({
        name: "",
        category: "",
        price: "",
        description: "",
        tags: [],
        type: "",
        images: [],
    })
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }
      function handleSubmit() {}

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
      </form>
    </>
  );
}
