import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product, isFavorite, removeFromFavorites }) => {
	return (
		<Card className='card'>
			<Link to={`/product/${isFavorite ? product.product : product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</Link>
			<Card.Body className='cardbody'>
				<Link to={`/product/${isFavorite ? product.product : product._id}`}>
					<Card.Title as='h5'>
						<strong style={{color :'pink'}}>Name :{product.name}</strong>
					</Card.Title>
				</Link>
				
				<Card.Title as='h5'>
					<strong>Years Of Experience :{product.Yoe}</strong>
				</Card.Title>
				<Card.Title as='h5'>Average Time: {product.Averagetime}</Card.Title>

				<Card.Title as='h6'>
					<strong style={{color:'skyblue'}}>Contact :{product.email}</strong>
				</Card.Title>
			</Card.Body>
			
			{product.product && (
				<Button
					type='button'
					variant='light'
					onClick={() => removeFromFavorites(product.product)}
				>
					<i className='fas fa-trash fa-2x'></i>
				</Button>
			)}
		</Card>
	);
};

export default Product;
