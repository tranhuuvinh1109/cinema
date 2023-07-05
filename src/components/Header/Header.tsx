import React, { FC } from 'react'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Container, NavDropdown, Nav, Form, Button } from 'react-bootstrap'
import { Avatar } from '@mui/material'
import { navbarItems } from '../../const'
import Link from 'next/link'


const Header: FC = () => {
	return (
		<header className='py-4 absolute top-0 left-0 right-0 z-50'>
			<Container className='flex justify-between'>
				<div className='logo'>
					<Link href='/'><img src='https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Flogo.png?alt=media&token=b86a4dc4-7d72-4166-aef5-f7ccd0d6596f' alt='logo' /></Link>
				</div>
				<div className='text-white'>
					<div className='flex justify-end items-center'>
						<div className='border px-1 py-1 rounded-full flex mr-8'>
							<select defaultValue='game' className='pl-2 bg-transparent outline-none focus:border-0 mr-4'>
								<option value='Movies'>Movies</option>
								<option value='game'>Game</option>
							</select>
							<input type='text' className='bg-transparent mr-4' />
							<button className='p-2 rounded-full  bg-red-200'><FontAwesomeIcon className='px-1' icon={faMagnifyingGlass} /></button>
						</div>
						<Avatar src='https://yt3.ggpht.com/yti/AHyvSCBhDorD0tzpdOfiTyvI2nIDLnWn6kapCKYbH2dR=s88-c-k-c0x00ffffff-no-rj-mo' alt='avatar' />
					</div>
					<div className='mt-4'>
						<ul className='flex'>
							<li className='mx-2 px-2 py-1'><a className='active' href='index-2.html'>Home</a></li>
							<li className='mx-2 px-2 py-1'><a href='movies.html'>Movies</a></li>
							<li className='mx-2 px-2 py-1'><a href='celebrities.html'>CelebritiesList</a></li>
							<li className='mx-2 px-2 py-1'><a href='top-movies.html'>Top Movies</a></li>
							<li className='mx-2 px-2 py-1'><a href='blog.html'>News</a></li>
							<li className='mx-2 px-2 py-1'><a className='theme-btn' href='#'><i className='icofont icofont-ticket'></i> Tickets</a></li>
						</ul>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header;