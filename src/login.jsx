import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import Message from '../components/Message';
// import Loader from '../components/Loader';
// import Meta from './components/Meta';
import FormContainer from './components/FormContainer';
import { login } from './actions/user-actions';

const Login = ({ location, history }) => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const role = JSON.parse(localStorage.getItem('role'))
	const userInfo = JSON.parse(localStorage.getItem('userInfo'))
	const { loading, error} = userLogin;

	const redirect =  '/';

	useEffect(() => {
		if (userInfo) {
			if(role=="User")
			{
				navigate('/page')
			}
			else if(role=="Constructor")
			{
				navigate('/pageConstructor')
			}
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<div className='login'>

		<FormContainer>
			{/* <Meta title='Login' /> */}
			<h1>Sign In</h1>
			{/* {error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />} */}
			<Form className='lform'>
				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary' onClick={submitHandler}>
					Sign In
				</Button>
			</Form>

			<Row className='py33'>
				<Col>
					New Customer?{' '}
					<Link className='p4' to={redirect ? `/register?redirect=${redirect}` : '/register'}>
						Regiter
					</Link>
				</Col>
			</Row>
		</FormContainer>
		</div>
	);
};

export default Login;

