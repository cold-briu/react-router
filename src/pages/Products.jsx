import React from 'react'
import { Outlet } from 'react-router-dom'
import Title from '../components/Title'

const Products = () => {
	return (
		<>
			<Title text={"Products"} />
			<Outlet />

		</>
	)
}

export default Products