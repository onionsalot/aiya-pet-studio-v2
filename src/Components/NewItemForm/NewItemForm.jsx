import { useEffect, useState } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as categoryService from "../../utilities/categories-api";
import Uploading from "../Uploading/Uploading";
import "./NewItemForm.scss"

export default function NewItemForm() {
  const [categories, setCategories] = useState([]);
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
        setCategories(res.response);
        setForm({...form, "category" : res.response[0]._id})
      });
    }

    getCat();
  }, []);

  function handleChange(e) {
    if (e.target.name === "tags") {
      setTags(e.target.value);
    } else if (e.target.name === "options") {
      setOptions(e.target.value);
    } else if (e.target.name === "type" ) {
      const boolType = e.target.value === "true" ? true : false;
      setForm({ ...form, [e.target.name]: boolType });
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
      const values = e.target.value.trim().split(/\s+/)
      console.log(values)
      if (e.target.value === "") return;
      e.target.name === "tags" ? setForm({ ...form, [e.target.name]: form.tags.concat(values) }) : setForm({ ...form, [e.target.name]: form.options.concat(values) })
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
    return <span key={idx} className="option-boxes">{e}<span className="option-delete" onClick={() => handleDelete(idx, "tags")}>x</span> </span>
  })
  const mappedOptions = form.options.map((e, idx) => {
    return <span key={idx} className="option-boxes">{e}<span className="option-delete" onClick={() => handleDelete(idx, "options")}>x</span> </span>
  })
  const mappedCategories = categories.map((e, idx) => {
    return <option value={e._id} key={idx}>{e.name}</option>;
  });
  return (
    <div className="NewItemForm">
      <h1>New Item Page</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="col-left">
          <label>Name</label>
        </div>
        <div className="col-right">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-left">
          <label>Category</label>
        </div>
        <div className="col-right">
          <select name="category" onChange={handleChange}>{mappedCategories}</select>
        </div>

        <div className="col-left">
          <label>Price</label>
        </div>
        <div className="col-right">
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-left">
          <label>Description</label>
        </div>
        <div className="col-right">
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-left">
          <label>Tags</label>
        </div>
        <div className="col-right">
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={handleChange}
            onKeyDown={keyPress}
          />
          <div className="under-options">{mappedTags}</div>
        </div>

        <div className="col-left">
          <label>Options</label>
        </div>
        <div className="col-right">
          <input
            type="text"
            name="options"
            value={options}
            onChange={handleChange}
            onKeyDown={keyPress}
          />
          <div className="under-options">{mappedOptions}</div>
        </div>

        <div className="col-left">
          <label>Type</label>
        </div>
        <div className="col-right">
          <select name="type" onChange={handleChange}>
            <option value="true" defaultValue>Show</option>
            <option value="false">Hidden</option>
          </select>
        </div>

        <div className="col-left">
          <label>Images</label>
        </div>
        <div className="col-right">
          <Uploading form={form} setForm={setForm}/>
        </div>
        <button type="submit" className="submit-button">ADD ITEM</button>
      </form>
      {error}
    </div>
  );
}
