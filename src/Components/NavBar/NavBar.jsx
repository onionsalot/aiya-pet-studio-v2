import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as categoryService from '../../utilities/categories-api';
import './NavBar.scss';

export default function NavBar({ user, setUser, setCurrentCategory }) {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		async function getCat() {
			await categoryService.getAll().then((res) => {
				setCategories(res.response)
				// console.log(res)
			})
		}

		getCat()
	}, [])

	function handleLogOut() {
		// Delegate to the users-service
		userService.logOut();
		// Update state will also cause a re-render
		setUser(null);
	}

	const showCategories = categories.map((e, idx) => {
		return <li> 
			<Link to='' onClick={()=>setCurrentCategory(e.name)}>
			{e.name}
			</Link>
			&nbsp; | &nbsp;
		</li>
	})

	return (
		<ul className="horizontal-list">
			{showCategories}
			<Link to='/admin/new_cat'>
				New Category
			</Link>
			<Link to='/admin/new_item'>
				New Item
			</Link>
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</ul>
	);
}
