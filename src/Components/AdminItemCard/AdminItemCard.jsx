export default function AdminItemCard( { item } ) {
    console.log(item)

  return (
    <>
        <tr>
            <td>{item.name}</td>
            <td>{item.category.name}</td>
            <td>{item.type ? "Show" : "Hidden"}</td>
            <td>{item.createdAt}</td>
            <td>Test Test Test</td>
        </tr>
    </>
  );
}
