import Navbar from '../components/Navbar'
import {  Row, Col} from 'reactstrap';
import  { numberWithCommas }from "../numberwithcomas";
import '../css/Detail.css'
import Footer from '../components/Footer'
import { useState} from 'react'
import {useHistory} from 'react-router-dom'

const Detail = () => {

    const data = localStorage.getItem("cart")
    // const Detailproduct= JSON.parse(data)

    const [Detail, setData] = useState({
        Detailproduct: JSON.parse(data)
    })
    const history = useHistory();
    
    const edit = () => {
        history.push('/Edit')
    }

    return(
        <div className="detail" fluid={true}>  
            <Row>
                <Navbar islogin={true} />
                <Col className="left">
                    <img className="Card-d-g" src={Detail.Detailproduct.picture} alt=""/>
                    <h3 className="Card-d-n">{Detail.Detailproduct.product_name}</h3>
                    <p className="Card-d-p">Rp. {numberWithCommas(Detail.Detailproduct.price)}</p>
                    <div className="Tombol-d">
                        <button className="addcart">Add To Cart</button>
                        <button onClick={edit} className="askstaff">Edit Product</button>
                    </div>
                </Col>
                <Col>
                <div className='Card-detail'>
                    <p className="info-deliv">Delivery only on Monday to friday at  1 - 7 pm</p>
                    <p className="ket-detail">{Detail.Detailproduct.ket}</p>
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
                <Col lg="2"><img className="Card-d-g-k" src={Detail.Detailproduct.picture} alt=""/></Col>
                <Col lg="5">
                    <div className="Card-d-n-k">{Detail.Detailproduct.product_name}</div>
                    <div className="Card-d-s-k">x1 (Reguler)</div>
                </Col>    
                <Col lg="4" className="m-qty">
                    <button className="tmbl-q">-</button>
                    <div className="Card-d-q-k">
                        {Detail.Detailproduct.qty}
                    </div>
                    <button className="tmbl-q">+</button>
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
