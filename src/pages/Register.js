import Navbar from '../components/Navbar'
import {
    FormGroup,
    Form,
    Label,
    Input,
    Row,
    Col,
    Container
  } from "reactstrap";
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import Logo from '../coffee 1.png'
import Google from '../png/google-logo-png-suite-everything-you-need-know-about-google-newest-0 2.png'
import {useHistory} from 'react-router-dom'

const Register = () => {
    const getToken = () => {
        localStorage.setItem("token","qweasd")
    }

    const history = useHistory();
    
    const register = (e) => {
        e.preventDefault();
            getToken()
            history.push('/Product')
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
                            <Link className="Register" to="/Login"> Login</Link>
                        </Col>
                    </Row>
                    <div className="Register-i">Register</div>       
                    <div className="Login">
                        <Form onSubmit={register} className="FLogin">
                                <Col>
                                <FormGroup className="FormGroup">
                                    <Label>Email Adress :</Label>
                                    <Input
                                    className="form-control-alternative"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    type="email"
                                    />
                                </FormGroup >
                                <FormGroup className="FormGroup">
                                    <Label>Password :</Label>
                                    <Input
                                    className="form-control-alternative"
                                    id="exampleFormControlInput1"
                                    placeholder="password"
                                    type="password"
                                    />
                                </FormGroup>
                                <FormGroup className="FormGroup">
                                    <Label>Phone Number :</Label>
                                    <Input
                                    className="form-control-alternative"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter yout phone number"
                                    type="number"
                                    />
                                </FormGroup>
                                <br />
                                <button type="submit" className="B-login">Sign Up</button>
                                <button className="B-login-google"><img src={Google} alt="" />        Login with Google</button>
                                </Col>
                        </Form>
                    </div>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default Register