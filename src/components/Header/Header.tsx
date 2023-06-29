import React from 'react'
import { faBell } from '@fortawesome/free-regular-svg-icons'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Container, NavDropdown, Nav, Form, Button } from 'react-bootstrap'
import { Avatar } from '@mui/material'
import { navbarItems } from '../../const'
import Link from 'next/link'


const Header = (): JSX.Element => {
	return (
		<Navbar expand="lg" className="bg-transparent container">
			<Container fluid>
				<Navbar.Brand><img src='https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/logo.png' /></Navbar.Brand>
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						{
							navbarItems.map((item) => {
								if (item.listDropdown.length > 0) {
									return (
										<NavDropdown title={item.label} id={item.label} className='navbar-item'>
											{
												item.listDropdown.map((dropdown) =>
													<>
														<NavDropdown.Item ><Link href={dropdown.url}>{dropdown.label}</Link></NavDropdown.Item>
														<NavDropdown.Divider />
													</>
												)
											}
										</NavDropdown>
									)
								}
								return (
									<Nav.Link className='navbar-item'><Link href={item.url}>{item.label}</Link></Nav.Link>
								)
							})
						}
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
					{/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
					<button className='p-2 mx-1'>
						<FontAwesomeIcon icon={faBell} fontSize={18} fontWeight={800} className='text-white' />
					</button>
					<Avatar src='https://firebasestorage.googleapis.com/v0/b/moment-learning.appspot.com/o/images%2Favatar%2Favt.jpg?alt=media&token=91cab143-40a3-4a4e-ab1d-b449be17c672' alt='avatar' />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header;