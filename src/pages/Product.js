import React from 'react';
import Navbar from '../components/Navbar'
import {useState, useEffect} from 'react'
import {Row, Col, Card, CardTitle, CardText, Container} from 'reactstrap';
import  {numberWithCommas }from "../numberwithcomas";
import '../css/Product.css'
import "animate.css"
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {useHistory} from 'react-router-dom'



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
    let Product = [
        {
            id: 1,
            picture: 'https://i.postimg.cc/ZqZJ1Sgx/m1.png',
            product_name:'Veggie tomato mix',
            price: 34000,
            category: 'Add-on',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
        },
        {
            id: 2,
            picture: 'https://i.postimg.cc/76tDGTLK/m2.png',
            product_name:'Hazelnut Latte',
            price: 25000,
            category: 'Coffee',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
    
        },
        {
            id: 3,
            picture: 'https://i.postimg.cc/FzfvjsdN/m3.png',
            product_name:'Summer fried rice',
            price: 22000,
            category: 'Foods',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
    
        },
        {
            id: 4,
            picture: 'https://i.postimg.cc/sxPm88f0/m8.png',
            product_name:'Creamy Ice Latte',
            price: 27000,
            category: 'Add-on',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
    
        },
        {
            id: 5,
            picture: 'https://i.postimg.cc/t4GbxbXG/m5.png',
            product_name:'Drum Sticks',
            price: 30000,
            category: 'Foods',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
    
        },
        {
            id: 6,
            picture: 'https://i.postimg.cc/130Q0dtn/m6.png',
            product_name:'Salty Rice',
            price: 20000,
            category: 'Foods',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
    
        },
        {
            id: 7,
            picture: 'https://i.postimg.cc/KvmGrxLR/espresso.png',
            product_name:'Espresso',
            price: 10000,
            category: 'Coffee',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
    
        },
        {
            id: 8,
            picture: 'https://i.postimg.cc/59KYss5B/coffee-latte.png',
            product_name:'Cofee Latte',
            price: 15000,
            category:"coffee",
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
    
        },
        {
            id: 9,
            picture: 'https://i.postimg.cc/pr52GJxC/cappucino.png',
            product_name:'Cappucino',
            price: 5000,
            category: 'Coffee',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
    
        },
        {
            id: 10,
            picture: 'https://cashbac.com/blog/wp-content/uploads/2019/04/Kopi-Terenak-Kekinian-di-Jakarta-Red-Velvet-Latte-e1556530040183.jpg',
            product_name:'Red Velvet Latte',
            price: 33000,
            category: 'Add-on',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
    
        },
        {
            id: 11,
            picture: 'https://i.postimg.cc/5NwHffd3/chocorum.png',
            product_name:'Choco Rhum',
            price: 28000,
            category: 'Add-on',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
        },
        {
            id: 12,
            picture: 'https://i.postimg.cc/pXNhNp7r/blackforest.png',
            product_name:'Black Forest',
            price: 30000,
            category: 'Add-on',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
        },
        {
            id: 13,
            picture: 'https://i.postimg.cc/RZ4WF2vz/chickenkatsu.png',
            product_name:'Chicken Katsu',
            price: 60000,
            category: 'Foods',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
        },
        {
            id: 14,
            picture: 'https://i.postimg.cc/LsshkfqC/salmon.png',
            product_name:'Salmon Truffle',
            price: 60000,
            category: 'Foods',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
        },
        {
            id: 15,
            picture: 'https://i.postimg.cc/bvFrmJkz/wiener.png',
            product_name:'Wiener Schnitzel',
            price: 69000,
            category: 'Foods',
            ket:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio nunc, dapibus non euismod ut, lobortis id ligula. Nam a hendrerit ligula. Vestibulum sagittis erat leo, in eleifend nibh eleifend in."
        },
        {
            id: 15,
            picture: 'https://i.postimg.cc/2521hX0K/image-25-1.png',
            product_name:'Cold Brew',
            price: 30000,
            category: 'coffee',
            ket: "Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours."
        }
    ]

    const [data, setData] = useState({
        product: Product,
        promo: Promo
    })

    const history = useHistory();
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    
    const hasilSearch = query.get("search")
    console.log(hasilSearch)
    useEffect(() => {
        if (hasilSearch && hasilSearch !== "") {
            const productSearch = Product.filter((e) => {
                if (e.product_name === hasilSearch) {
                   return e
                } 
            })
            setData({...data,product: productSearch})
        } else {
            setData({...data,product: Product})
        }
       
    },[hasilSearch])
    console.log(data)
    

   

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
                 </div>
                 <div className="Product">
                    <Row  className="Product-cards"> 
                        {data.product.map((e) => {
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