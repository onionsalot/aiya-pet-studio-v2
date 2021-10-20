import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import { useEffect, useState } from 'react';
import * as categoriesAPI from "../../../utilities/categories-api"
import "./AdminCatPage.scss";
import AdminCatCard from "../../../components/AdminCatCard/AdminCatCard";

export default function AdminCatPage() {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    async function getCategories() {
      const res = await categoriesAPI.getAll();
      setCategories(res.response);
    }

    getCategories();
  },[])

  const mappedCategories= categories.map(cat => <AdminCatCard cat={cat} />)
  return (
    <div className="AdminItemPage">
      <nav>
        <NavBarAdmin />
      </nav>
      <main>
        <table>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Created on</th>
            <th>Action</th>
          </tr>
          {mappedCategories}
        </table>
      </main>
    </div>
  );
}
