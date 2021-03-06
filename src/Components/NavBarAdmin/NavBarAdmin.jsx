import { Link } from 'react-router-dom';
import './NavBarAdmin.scss'

export default function NavBarAdmin({ user, setUser, setCurrentCategory }) {


	return (
		<div className="vertical-List">
            <div>
                <Link to='/admin/items'>
                    Item List
                </Link>
            </div>
            <div>
                <Link to='/admin/categories'>
                    Category List
                </Link>
            </div>
            <div>
                <Link to='/admin/orders'>
                    Order List
                </Link>
            </div>
            <hr />
            <div>
                <Link to='/admin/new_cat'>
                    Add Category
                </Link>
            </div>
            <div>
                <Link to='/admin/new_item'>
                    Add Item
                </Link>
            </div>

		</div>
	);
}
