import { useEffect, useState } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as itemsAPI from "../../utilities/items-api";

import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

import './App.scss';
import IndexPage from '../IndexPage/IndexPage';
import NewItemPage from '../Admin/NewItemPage/NewItemPage';
import NewCatPage from '../Admin/NewCatPage/NewCatPage';
import AdminBanner from '../../components/AdminBanner/AdminBanner';
import AdminIndexPage from '../Admin/AdminIndexPage/AdminIndexPage';

export default function App() {
	const [user, setUser] = useState(getUser());
	const [items, setItems] = useState([]);
	const [currentCategory, setCurrentCategory] = useState("")
	console.log('get item')
	let location = useLocation();

	useEffect(() => {
	  async function getItem() {
		const res = await itemsAPI.getAll();
		setItems(res.response);
		console.log(res.response)
	  }
	  getItem();
	}, []);

	return (
		<main className='App'>
			{user ? (
				<>
					{location.pathname.includes('/admin') ? (
						<>
						<AdminBanner />
						<Switch>
							<Route path='/admin/new_item'>
								<NewItemPage />
							</Route>
							<Route path='/admin/new_cat'>
								<NewCatPage />
							</Route>
							<Route path='/admin'>
								<AdminIndexPage userName={user.name} />
							</Route>
						</Switch>
						</>
					) : (
						<>
						<NavBar user={user} setUser={setUser} setCurrentCategory={setCurrentCategory} />
						<Switch>
							<Route path='/'>
								<IndexPage items={ items } currentCategory={ currentCategory }/>
							</Route>
							{/* <Route path='/orders/new'>
								<NewOrderPage />
							</Route>
							<Route path='/orders'>
								<OrderHistoryPage />
							</Route>
							<Redirect to='/orders' /> */}
						</Switch>
						</>	
					)}
				</>
			) : (
				<>
					<NavBar user={user} setUser={setUser} setCurrentCategory={setCurrentCategory} />
					<Switch>
						<Route path='/auth'>
							<AuthPage setUser={setUser} />
						</Route>
						<Route path='/'>
							<IndexPage items={ items } currentCategory={ currentCategory }/>
						</Route>
					</Switch>
				</>
			)}
		</main>
	);
}
