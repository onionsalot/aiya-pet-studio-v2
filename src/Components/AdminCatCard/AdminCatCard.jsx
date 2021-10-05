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
            <td>Test Test Test</td>
        </tr>
    </>
  );
}
