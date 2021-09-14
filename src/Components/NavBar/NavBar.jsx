import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as categoryService from '../../utilities/categories-api';

export default function NavBar({ user, setUser, currentCategory }) {
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
		return <> <Link to='/'>{e.name}</Link> &nbsp; | &nbsp;</>
	})

	return (
		<nav>
			{showCategories}
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
}
