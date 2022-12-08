import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from './components/Message';
import Loader from './components/Loader';
import Meta from './components/Meta';
import FormContainer from './components/FormContainer';
import { addproduct } from './actions/product_actions';
import './header.css';
// import DatePicker from "react-datepicker";

const Addproduct = () =>{
    const[name,setName]  = useState();
	const[YOE,setYoe]  = useState();
	const[email,setEmail]  = useState();
	const[Averagetime,setAveragetime]  = useState();
	const[image,setImage]  = useState();

	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo } = userRegister;


	const redirect =  '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		const formdata = new FormData();
		const c = JSON.stringify({name, YOE,Averagetime,email})
		formdata.append("fileinput",image)
		formdata.append("fileinput",c)
		dispatch(addproduct(formdata));

	};




return(

    <div className="addproduct">
      <FormContainer>
			<h1>Portfolio</h1>
			{/* {Message && <Message variant='danger'>{Message}</Message>}
			
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />} */}
			<Form className='Pform' onSubmit={submitHandler}>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='name'
						placeholder='Enter name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='YOE'>
					<Form.Label>Years Of Experience </Form.Label>
					<Form.Control
						type='number'
						placeholder='Enter Experience'
						value={YOE}
						onChange={(e) => setYoe(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='Averagetime'>
					<Form.Label>Average Time For Project Completion </Form.Label>
					<Form.Control
						type='date'
						placeholder='Enter Average Time'
						value={Averagetime}
						onChange={(e) => setAveragetime(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='email'>
					<Form.Label> Contact </Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId='image'>
					<Form.Label> Recent Projects </Form.Label>
					<Form.Control
						type='file'
						onChange={(e) => setImage(e.target.files[0])}
					></Form.Control>
				</Form.Group>
			
				
				<Button type='submit' variant='primary'>
					Add
				</Button>
			</Form>

	
		</FormContainer>
    </div>
)
}
 export default Addproduct;
