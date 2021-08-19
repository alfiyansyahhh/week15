import {Link} from 'react-router-dom'
import  '../css/Navbar.css'
import Logo from '../coffee 1.png'
import Humberger from '../svg/hamburger-menu.svg'
import { Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import { Collapse, Navbar, Nav, Container} from 'reactstrap';
import fprofile from '../png/image 39.png'
import chat from '../png/chat (1) 1.png'
import seacrh from '../png/Vector (5).png'
import {useHistory} from 'react-router-dom'


const Navbar1 = (props) => {
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [search, setSearch] = useState("")
    
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/Product?search=${search}`)
    }

    const menu2 = (data) => { 
        if (data === true) {
               return(
                   <div className="nav-user">
                    <form className="testss" onSubmit={handleSubmit}>
                        <img src={seacrh} alt=""/>
                        <input  type="text" onChange={changeSearch} name="search" value={search} />
                    </form>                       
                    <div><img className="chat" src={chat} alt=""/></div>
                    <div><img className="fprofile" src={fprofile} alt=""/></div>
                   </div>
               )         
        } else {
            return(
                <div>
                    <Link className="Loginn-nav" to="/Login"> Login</Link>
                    <Link to="/Register"> <button className="Register">Sign Up</button></Link>
                </div>
            ) 
        } 
    }

    return(  
    <div className="Navbar">
     <Container fluid={true}> 
        
        <Row>
            <Navbar color="faded" light>
                <Col lg="3" md="3" xs="12" className="logo">
                    <Link className="l" to="/"> <img src={Logo} alt="" /> </Link>
                    <Link className="l2" to="/"> {props.islogin} Coffee Shop</Link>
                    <div onClick={toggleNavbar} className="mr-2" ><img width="30px" src={Humberger} alt="" /></div>
                </Col>
                <Col></Col>
                <Col lg="6" md="6" xs="12"  className="Menu1">
                    <Link className="M1" to="/"> Home</Link>
                    <Link className="M1" to="/Product"> Product</Link>
                    <Link className="M1" to="/Cart"> Your Cart</Link>
                    <Link className="M1" to="/History"> History</Link>
                </Col>   
                <Col lg="3" md="3" xs="3" className="Menu2">
                    {menu2(props.islogin)}
                </Col>

                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <Link className="M2" to="/"> Home</Link>
                    <Link className="M2" to="/Product"> Product</Link>
                    <Link className="M2" to="/Cart"> Your Cart</Link>
                    <Link className="M2" to="/History"> History</Link>
                    <Link className="Loginn-nav" to="/Login"> Login</Link>
                    <Link className="Register" to="/Register"> Sign Up</Link>
                </Nav>
                
                </Collapse>
            </Navbar>
        </Row> 
     </ Container>
    </div>                      
     
    )
}

export default Navbar1
