import { Link } from "react-router-dom";

export default function AdminItemCard( { item } ) {
    const d = new Date(item.createdAt)
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    const dateString = `${mm}/${dd}/${yyyy} ${d.getHours()}:${d.getMinutes()} `
  return (
    <>
        <tr>
            <td>{item.name}</td>
            <td>{item.category.name}</td>
            <td>{item.type ? "Show" : "Hidden"}</td>
            <td>{dateString}</td>
            <td>
              <Link to={{pathname: '/admin/new_item', state:{ ...item }}}>Edit</Link>
              Del
            </td>
        </tr>
    </>
  );
}
