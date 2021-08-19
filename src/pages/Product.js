import React from 'react';
import Navbar from '../components/Navbar'
import {useState} from 'react'
import {Row, Col, Card, CardTitle, CardText, Container} from 'reactstrap';
import  {numberWithCommas }from "../numberwithcomas";
import DataProduct from '../data/DataProduct'
import '../css/Product.css'
import "animate.css"
import Footer from '../components/Footer'
import DataPromo from '../data/Promo'
import {Link} from 'react-router-dom'



const Product = () => {
    const [data] = useState({
        product: DataProduct,
        promo: DataPromo
    })

    const addCart = (e) => {
        const dataCart = {...e,qty:1}
        localStorage.setItem("cart", JSON.stringify(dataCart))    
    }
  
    return(
        <Container fluid={true}>    
            <Row>  
            <Navbar />
                <Col lg="3">
                   <h4 className="Title-promo">Promo Today</h4>
                   <p>Coupons will be updated every weeks. Check them out! </p>
                       <Row className="Promo-card">
                           {data.promo.map((e) =>{
                               return(
                                   <Col lg="12">
                                        <Col body className="Card-pr" id={e.id}>
                                            <Col lg="3"  className="Card-pr-g" ><img src={e.picture} alt="" /></Col>
                                            <Col className="ket-p" > 
                                                <h6>{e.name}</h6>
                                                <p>{e.ket}</p>
                                            </Col>
                                        </Col>
                                   </Col>
                               )
                           })}
                       </Row>
                   <button className="Applay-coupon">Applay coupon</button>
                   <ul className="Terms">
                       <h6>Terms and Condition</h6>
                       <li>1. You can only apply 1 coupon per day</li> 
                       <li>2. It only for dine in</li> 
                       <li>3. Buy 1 get 1 only for new user</li> 
                       <li>4. Should make member card to apply coupon</li>                                             
                    </ul>
                </Col>
                <Col lg="9" md="12" xm="12" className="MainProduct">
                 <div className="Menu-p">
                     <p className="p1">Favorite & Promo</p>
                     <p>Coffee</p>
                     <p>Non Coffee</p>
                     <p>Foods</p>
                     <p>Add-on</p>
                 </div>
                 <div className="Product">
                    <Row  className="Product-cards"> 
                        {data.product.map((e) => {
                            return(
                                <Col lg="3" md="3" xs="6" >
                                    <Card body className="Card-p">
                                        <CardTitle onClick={() => addCart(e)} > <Link  className="Card-p-g" to="/details"> <img src={e.picture} alt="" /> </Link> </CardTitle>
                                        <CardText className="Card-p-n">{e.product_name}</CardText>
                                        <CardText className="Card-p-p"> Rp. {numberWithCommas(e.price)}</CardText>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                    
                 </div>
                
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default Product