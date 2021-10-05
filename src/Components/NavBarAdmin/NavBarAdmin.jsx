import { Link } from 'react-router-dom';
import './NavBarAdmin.scss'

export default function NavBarAdmin({ user, setUser, setCurrentCategory }) {


	return (
		<div className="vertical-List">
            <div>
                <Link to='/admin/new_cat'>
                    New Category
                </Link>
            </div>
            <div>
                <Link to='/admin/new_item'>
                    New Item
                </Link>
            </div>

		</div>
	);
}
