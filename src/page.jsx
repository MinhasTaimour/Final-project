import './header.css'
// import Carousel  from 'react-bootstrap/Carousel';
// import b1 from './assets/b1.jpg' 
// import b2 from './assets/b2.jpg' 
// import b3 from './assets/b3.jpg' 
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from './components/Product';
import Message from './components/Message';
import Loader from './components/Loader';
import Paginate from './components/Paginate';
// import ProductCarousel from '../components/ProductCarousel';
// import Meta from '../components/Meta';
import { listProducts } from './actions/product_actions';
import { useParams } from 'react-router-dom';
const page = () =>{
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
// if it does not have a page number, set it to 1
const {keyword = '',pageNumber = 1} = useParams()
console.log(pageNumber)
const dispatch = useDispatch();

const productList = useSelector((state) => state.productList);
const { loading, error, products, page, pages } = productList;

useEffect(() => {
  dispatch(listProducts(keyword, pageNumber));
}, [dispatch, keyword , pageNumber]);

console.log(products)
return(
    <div className="page"> 
       <div className='pageheader'>
       <br/>   
          <div className='pagebar'>
            <h1 style={{color:'gray'}}> Latest Portfolios</h1> 
          </div>
       <br/>
       </div>

    
        {/* {!userInfo ? (   
        <h1></h1>
        ):( */}
        {
		    false ?(
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
               ) }
          <Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
    </div>
        
        )
        
{/*           
          <div className="carousel-inner"> }
{/* 
    <Carousel>
    
      <Carousel.Item>
      <div class="item active">
        <img
          className="img"
          src={b1} alt={"b1"}
        />
     </div>
      </Carousel.Item> */}
 
      {/* <div class="item"> */}
{/* 
      <Carousel.Item>
        <img
          className="img"
         src={b2} alt={"b2"}
        /> */}
      {/* </Carousel.Item> */}
      {/* </div> */}
      {/* <div class="item"> */}
{/* 
      <Carousel.Item>
        <img
          className="img"
          src={b3} alt={"b3"}
        /> */}
{/* 
      </Carousel.Item> */}
      {/* </div> */}
    {/* </Carousel> */}
    {/* </div> */}


    }

 export default page;
