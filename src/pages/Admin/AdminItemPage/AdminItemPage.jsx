import AdminItemCard from "../../../components/AdminItemCard/AdminItemCard";
import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import "./AdminItemPage.scss";

export default function AdminItemPage({ items }) {
  console.log(items);
    const mappedItems = items.map((item,idx) => <AdminItemCard item={ item } key={ idx }/>)
    console.log(mappedItems)
  return (
    <div className="AdminItemPage">
      <nav>
        <NavBarAdmin />
      </nav>
      <main>
        <table>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Type</th>
            <th>Created on</th>
            <th>Action</th>
          </tr>
          {mappedItems}
        </table>
      </main>
    </div>
  );
}
