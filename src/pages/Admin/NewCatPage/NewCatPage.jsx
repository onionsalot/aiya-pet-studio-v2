import NavBarAdmin from "../../../components/NavBarAdmin/NavBarAdmin";
import NewCatForm from "../../../components/NewCatForm/NewCatForm";
import "./NewCatPage.scss";

export default function NewCatPage() {


  return (
    <div className="NewCatPage">
      <nav>
        <NavBarAdmin />
      </nav>
      <main>
        <NewCatForm />
      </main>
    </div>
  );
}
