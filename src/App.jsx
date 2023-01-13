import React from 'react'
import Title from './Title'

import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Title text={"home"} />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />

}

export default App