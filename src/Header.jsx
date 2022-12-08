import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import SearchBox from './SearchBox';
import './header.css';
import { logout } from './actions/user-actions';
import { BsFillCartDashFill } from 'react-icons/bs';
import axios from 'axios';
import { USER_LOGIN_SUCCESS } from './constants/user-constants';

const Header = () => {
	const dispatch = useDispatch();
	const userInfo = JSON.parse(localStorage.getItem('userInfo'))
	const navigate = useNavigate()
	// const history = useHistory();
	console.log(userInfo)

	const logoutHandler = () => {
		dispatch(logout());
		navigate('/login');
	};
	(async function (){
		if(!userInfo)
		return

	const config ={
		headers :{
			Authorization : `Bearer ${userInfo.token}`,		
			name: userInfo.name,
			role: userInfo.role,
		}
	}
	await axios.get(
		'http://localHost:5000/users/token', config
	)
	.then((res) => {
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: res.data,
		});
		localStorage.setItem('userInfo', JSON.stringify(res.data));
	}).catch((error) => {
			console.log(error);
			if(error.code == "ERR_BAD_REQUEST"){
				window.alert("Token Expired");
				logoutHandler();
			}
	})
}())


	return (
		<header className='header'>
			<Navbar variant='custom' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to ='/'>
						<Navbar.Brand className='logo'>EASY BUILD</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<SearchBox />
						<Nav className='ml-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i ></i> <BsFillCartDashFill/>My Orders
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
							userInfo.role=="User" ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/favorites'>
										<NavDropdown.Item>Favorites</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<NavDropdown title='Constructor' id='adminmenu'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/productlist'>
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							))
						:(
							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user'></i>Sign In
								</Nav.Link>
							</LinkContainer>
						)
						}
						
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
