import Navbar from '../components/Navbar'
import {  Row, Col, Card,  CardTitle, CardText, Container} from 'reactstrap';
import  { numberWithCommas }from "../numberwithcomas";
import '../css/Detail.css'
import Footer from '../components/Footer'
import { useState, createContext, useEffect} from 'react'

const Detail = () => {

    const data = localStorage.getItem("cart")
    const Detailproduct= JSON.parse(data)

    const [data2, setData] = useState({
        ListProduct: Detailproduct
    })

    // const addqty =() =>{
    //     setData({
    //       ...data2,
    //       List: data2.ListProduct.qty + 1
    //     })
    //   }
    
    return(
        <div className="detail" fluid={true}>  
            <Row>
                <Navbar />
                <Col className="left">
                    <img className="Card-d-g" src={Detailproduct.picture} alt=""/>
                    <h3 className="Card-d-n">{Detailproduct.product_name}</h3>
                    <p className="Card-d-p">Rp. {numberWithCommas(Detailproduct.price)}</p>
                    <div className="Tombol-d">
                        <button className="addcart">Add To Cart</button>
                        <button className="askstaff">Ask a Staff</button>
                    </div>
                </Col>
                <Col>
                <div className='Card-detail'>
                    <p className="info-deliv">Delivery only on Monday to friday at  1 - 7 pm</p>
                    <p className="ket-detail">{Detailproduct.ket}</p>
                    <div className="size">
                        <p className="ket-size">Choose a size</p>
                        <div className="size2">
                            <p className="r">R</p>
                            <p className="r">L</p>
                            <p className="r">XL</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h6 className="test22">Choose Delivery Methods</h6>
                    <div className="ChooseDelive">
                        <p className="to-d">Dine in</p>
                        <p className="to-d">Door Delivery</p>
                        <p className="to-d">Pick up</p>
                    </div>
                </div>
                    
                </Col>
                
            </Row>

            <div className="addc">
            <Row className="addc2">
                <Col lg="1"><img className="Card-d-g-k" src={Detailproduct.picture} alt=""/></Col>
                <Col lg="5"><div>plus</div></Col>    
                <Col lg="6">
                    <div>
                        {data2.ListProduct.qty}
                    </div>
                    <button>add</button>
                </Col>    
            </Row>
            <Row className="addc3">
                CHECKOUT
            </Row>
            </div>
            <div className="test6"></div>
            <Footer />
        </div>
    )
}

export default Detail
