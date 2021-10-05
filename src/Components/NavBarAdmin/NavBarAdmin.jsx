import { Link } from 'react-router-dom';
import './NavBarAdmin.scss'

export default function NavBarAdmin({ user, setUser, setCurrentCategory }) {


	return (
		<ul className="vertical-List">
            <li>
                <Link to='/admin/new_cat'>
                    New Category
                </Link>
            </li>
            <li>
                <Link to='/admin/new_item'>
                    New Item
                </Link>
            </li>

		</ul>
	);
}
