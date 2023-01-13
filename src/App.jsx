import React from 'react'
import Title from './components/Title'
import Navbar from './layout/Navbar'

import {
	Route,
	Routes,
	BrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Profile from './pages/Profile';


export const ROUTES = {
	HOME: "/",
	PRODUCTS: "/products",
	PROFILE: "/profile"
}


const App = () => {
	return <>
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.PRODUCTS} element={<Products />} />
				<Route path={ROUTES.PROFILE} element={<Profile />} />
				<Route path="*" element={<Title text={"not found"} />} />
			</Routes>
		</BrowserRouter>

	</>

}

export default App