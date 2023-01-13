import React from 'react'
import Title from './Title'
import Navbar from './Navbar'

import {
	Route,
	Routes,
	BrowserRouter
} from "react-router-dom";

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
				<Route path={ROUTES.HOME} element={<Title text={"Home"} />} />
				<Route path={ROUTES.PRODUCTS} element={<Title text={"Products"} />} />
				<Route path={ROUTES.PROFILE} element={<Title text={"Profile"} />} />
				<Route path="*" element={<Title text={"not found"} />} />
			</Routes>
		</BrowserRouter>

	</>

}

export default App