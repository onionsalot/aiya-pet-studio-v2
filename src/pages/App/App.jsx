import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

import './App.scss';
import IndexPage from '../IndexPage/IndexPage';
import NewItemPage from '../Admin/NewItemPage/NewItemPage';
import NewCatPage from '../Admin/NewCatPage/NewCatPage';

export default function App() {
	const [user, setUser] = useState(getUser());

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route path='/admin/new_item'>
							<NewItemPage />
						</Route>
						<Route path='/admin/new_cat'>
							<NewCatPage />
						</Route>
						<Route path='/'>
							<IndexPage />
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
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
