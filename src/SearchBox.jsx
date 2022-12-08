import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './header.css';

const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push('/');
		}
	};

	return (
		<Form onSubmit={submitHandler} className="form-inline">
			<Form.Control
				type='text'
				name='q'
				onChange={(e) => setKeyword(e.target.value)}
				placeholder='Search Products...'
				className='sb1'
			></Form.Control>
           
			<Button  type='submit' variant='blue' className='sb'>
				Search
			</Button>
		</Form>
	);
};

export default SearchBox;
