import {
    FormGroup,
    Form,
    Label,
    Input,
    Row,
    Col,
    Container
  } from "reactstrap";
import '../css/Login.css'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import Logo from '../coffee 1.png'
import Google from '../png/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png'
import { useState } from 'react'




const Login = () => {

    const [data, setData] = useState({
        email: "",
        pass: ""
    })

    const getToken = () => {
        localStorage.setItem("token","qweasd")
    }

    const insertemail = (e) => {
        setData({
            ...data,
            email: e.target.value
          })
    }

    const insertpass = (e) => {
        setData({
            ...data,
            pass: e.target.value
          })
    }

    const login = (e) => {
        e.preventDefault();
        if (data.email && data.pass === "admin") {
            getToken()
            alert("succes")
        } else {
            alert("email/passwordsalah")
        }
        console.log(data.pass)
    }

    return(
        <Container fluid={true}>  
            <Row>
                <Col lg="5" className="Bg">
                    
                </Col>
                <Col className="Main-Login" >
                    <Row className="Nav-Login">
                        <Col >
                            <Link className="l" to="/"> <img src={Logo} alt="" /> </Link>
                            <Link className="l2" to="/"> Coffee Shop</Link>
                        </Col>
                        <Col>
                            <Link className="Register" to="/Register"> Sign Up</Link>
                        </Col>
                    </Row>

                    <div className="Login-i">Login</div>
                    <div className="Login">
                        <Form onSubmit={login} className="FLogin">
                                <Col>
                                <FormGroup className="FormGroup">
                                    <Label>Email Adress :</Label>
                                    <Input onChange={insertemail}
                                    className="form-control-alternative"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    type="text"
                                    />
                                </FormGroup >
                                <FormGroup className="FormGroup">
                                    <Label>Password :</Label>
                                    <Input onChange={insertpass}
                                    className="form-control-alternative"
                                    id="exampleFormControlInput1"
                                    placeholder="password"
                                    type="password"
                                    />
                                </FormGroup>
                                <br />
                                <p className="Forgetpass">Forgot password?</p>
                                <button type="submit" className="B-login">Login</button>
                                <button className="B-login-google" onClick={getToken}><img src={Google} alt="" />        Login with Google</button>
                                </Col>
                        </Form>
                    </div>
                </Col>
            </Row>

            
            <Footer />
        </Container>
    )
}

export default Login