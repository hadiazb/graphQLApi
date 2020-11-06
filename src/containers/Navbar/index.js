import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Navbar = ({ children }) => {
	return (
		<>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__list-item'>
						<NavLink activeClassName='boton' to='/list'>
							List
						</NavLink>
					</li>
					<li className='nav__list-item'>
						<NavLink activeClassName='boton' to='/form'>
							Form
						</NavLink>
					</li>
				</ul>
			</nav>
			{children}
		</>
	);
};

export default Navbar;
