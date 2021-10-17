import { Link } from "react-router-dom";

export default function AdminCatCard( { cat } ) {
    const d = new Date(cat.createdAt)
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    const dateString = `${mm}/${dd}/${yyyy} ${d.getHours()}:${d.getMinutes()} `
  return (
    <>
        <tr>
            <td>{cat.name}</td>
            <td>{cat._id}</td>
            <td>{dateString}</td>
            <td>
            <Link to={{pathname: '/admin/new_cat', state:{ ...cat }}}>Edit</Link>
              Del

            </td>
        </tr>
    </>
  );
}
