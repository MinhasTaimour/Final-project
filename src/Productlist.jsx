import './header.css'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Productlist = () =>{

return(

    <div className="productlist">
        <div className='addbutton'>
	<LinkContainer to='/Addproduct'>
       <Button type='submit' variant='primary'>Add Product</Button>
	</LinkContainer>
    </div>

    </div>
)
}
 export default Productlist;

