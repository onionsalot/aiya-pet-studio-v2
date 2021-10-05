import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import NewItemForm from "../../../components/NewItemForm/NewItemForm";
import "./NewItemPage.scss";

export default function NewItemPage() {

  return (
    <div className="NewItemPage">
      <nav>
        <NavBarAdmin />
      </nav>
      <main>
        <NewItemForm />
      </main>
    </div>
  );
}
