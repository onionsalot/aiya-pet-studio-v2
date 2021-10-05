import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";

export default function AdminIndexPage({ userName }) {

return (
    <div className="NewItemPage">
      <nav>
        <NavBarAdmin />
      </nav>
      <main>
        <h2>Hello, {userName}</h2>
      </main>
    </div>
)
}