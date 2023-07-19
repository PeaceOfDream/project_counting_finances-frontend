import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
	return (
		<div className='min-h-screen bg-slate-900 font-roboto text-white pb-20'>
			<div>HEADER</div>
			<div className='container'>
				<Outlet/>
			</div>
		</div>
	)
}
