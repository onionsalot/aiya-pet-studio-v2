import { useEffect, useState } from "react";
import * as itemsAPI from "../../../utilities/items-api";
import * as categoryService from "../../../utilities/categories-api";
import "./NewItemPage.scss";
import { set } from "mongoose";
import Uploading from "../../../components/Uploading/Uploading";

export default function NewItemPage() {
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([])
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
  const [tags, setTags] = useState("");
  const [options, setOptions] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function getCat() {
      await categoryService.getAll().then((res) => {
        const mappedCategories = res.response.map((e, idx) => {
          return <option value={e.name} key={idx}>{e.name}</option>;
        });
        setCategories(mappedCategories);
      });
    }

    getCat();
  }, []);

  function handleChange(e) {
    if (e.target.name === "tags") {
      setTags(e.target.value);
    } else if (e.target.name === "options") {
      setOptions(e.target.value);
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const newCat = await itemsAPI.create(form);
    if (newCat.success === true && newCat.msg === "OK") {
      setError("New Item Added!");
    } else {
      setError("Failed to add anything");
    }
  }
  function keyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (e.target.value === "") return;
      e.target.name === "tags" ? setForm({ ...form, [e.target.name]: [...form.tags, tags.trim()] }) : setForm({ ...form, [e.target.name]: [...form.options, options.trim()] })
      setTags("");
      setOptions("");
    }
  }
  function handleDelete(index, type) {
    if(type==="tags") {
      const update = (form.tags.filter((item, idx) => idx !==index))
      setForm({ ...form, "tags": update})
    } else {
      const update = (form.options.filter((item, idx) => idx !==index))
      setForm({ ...form, "options": update})
    }
    
  }


  const mappedTags = form.tags.map((e, idx) => {
    return <span key={idx} >{e}<span onClick={() => handleDelete(idx, "tags")}>( x )</span> </span>
  })
  const mappedOptions = form.options.map((e, idx) => {
    return <span key={idx} >{e}<span onClick={() => handleDelete(idx, "options")}>( x )</span> </span>
  })
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
        <select name="category">{categories}</select>
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
          value={tags}
          onChange={handleChange}
          onKeyDown={keyPress}
        />
        {mappedTags}
        <label>Options</label>
        <input
          type="text"
          name="options"
          value={options}
          onChange={handleChange}
          onKeyDown={keyPress}
        />
        {mappedOptions}
        <label>type</label>
        <select name="type">
          <option value={false}>Hidden</option>
          <option value={true}>Show</option>
        </select>
        <label>images</label>
        <Uploading form={form} setForm={setForm}/>
        <button type="submit">ADD ITEM</button>
      </form>
      {error}
    </>
  );
}
