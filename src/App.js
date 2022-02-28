import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import TODO from './Page/todo';
import UserList from './Page/user-list';

import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/todo' element = { TODO }></Route>
				<Route path='/user-list' element = { UserList }></Route>
			</Routes>
		</BrowserRouter>
	)
}
export default App;