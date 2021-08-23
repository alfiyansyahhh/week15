import React from 'react';
import Navbar from '../components/Navbar'
import {useState, useEffect} from 'react'
import {Row, Col, Card, CardTitle, CardText, Container} from 'reactstrap';
import  {numberWithCommas }from "../numberwithcomas";
import '../css/Product.css'
import "animate.css"
import Footer from '../components/Footer'
import {useLocation, useHistory, Link} from 'react-router-dom'
import axios from 'axios'




const Product = () => {
    let Promo = [
        {
            id: 1,
            picture:"https://i.postimg.cc/wjyJ35L3/logom.png",
            name:"HAPPY MOTHER’S DAY!",
            ket:"Get one of our favorite menu for free!",
            color: "green"
        },
        {
            id: 2,
            picture:"https://i.postimg.cc/HWvV5cpM/logog.png",
            name:"Get a cup of coffee for free on sunday morning",
            ket:" Only at 7 to 9 AM",
            color: "yellow"
        },
        {
            id: 3,
            picture:"https://i.postimg.cc/wjyJ35L3/logom.png",
            name:"HAPPY MOTHER’S DAY!",
            ket:"Get one of our favorite menu for free!",
            color: "green"
        },
        {
            id: 4,
            picture:"https://i.postimg.cc/WbDt7N3H/logoh.png",
            name:"HAPPY HALLOWEEN!",
            ket:"Do you like chicken wings? Get 1 free only if you buy pinky promise",
            color: "Brown"
        }
    ]    

    const [data, setData] = useState({
        promo: Promo,
        product3: [],
    })
    const API_URL = 'http://18.206.120.211:8000'
    const token = localStorage.getItem('token')
    const getproduct = () => {
        axios.get(`${API_URL}/product`, { headers: { token: token} })
        .then(function (response) {
            // handle success
            setData({...data, product3: response.data.data.data})
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    useEffect(() => {
       getproduct()
    }, [])

    const history = useHistory();
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    
    const hasilSearch = query.get("search")   
    useEffect(() => {
        axios.get(`${API_URL}/product?search=${hasilSearch}`, { headers: { token: token} })
        .then(function (response) {
            // handle success
            if (hasilSearch && hasilSearch !== "") {
                setData({...data, product3: response.data.data.data})
            } else {
                getproduct()
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })         
    },[hasilSearch]) 

    const Detail = (data) => {
        const dataDetail = {...data,qty:1}
        localStorage.setItem("cart", JSON.stringify(dataDetail))
        history.push('/Detail')    
    }
  
    return(
        <div>
        <Container fluid={true}>    
            <Row>  
            <Navbar islogin={true} product={data.product}/>
             <Col lg="3">
                <h4 className="Title-promo">Promo Today</h4>
                <p>Coupons will be updated every weeks. Check them out! </p>
                <Row className="Promo-card">
                {data.promo.map((e) =>{
                    return(
                        <Col lg="12">
                            <Col body className={`Card-pr ${e.color}`} id={e.id}>
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
                     <p><Link className="addp" to='/Add'>Add-Product</Link></p>
                 </div>
                 <div className="Product">                     
                    <Row  className="Product-cards"> 
                    {data.product3.map((e) => {
                            return(
                            <Col lg="3" md="3" xs="6" >
                            <Card body onClick={() => Detail(e)} className="Card-p">
                                <CardTitle className="Card-p-g" ><img src={e.picture} alt="" /></CardTitle>
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
           
        </Container>
         <Footer />
         </div>
    )
}

export default Product