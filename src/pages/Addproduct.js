import '../css/Add.css'
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
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router';


const Add = () => {
    const API_URL = 'http://18.206.120.211:8000'
    
    const [add, setAdd] = useState({
        picture: "",
        product_name: "",
        price:"",
        category:"",
        ket:""
    })

    const history = useHistory()
    const cproduct = () => {
        history.push('/product')
    }

    const insertPicure = (e) => {
        setAdd({
            ...add,
            picture: e.target.value
          })
    }
    const insertProductName = (e) => {
        setAdd({
            ...add,
            product_name: e.target.value
          })
    }
    const insertPrice = (e) => {
        setAdd({
            ...add,
            price: e.target.value
          })
    }
    const insertCategory = (e) => {
        setAdd({
            ...add,
            category: e.target.value
          })
    }
    const insertKet = (e) => {
        setAdd({
            ...add,
            ket: e.target.value
          })
    }

    const token = localStorage.getItem('token')
    const addProductDb = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/product`, add, { headers: { token: token} })
        .then(function (response) {
            // handle success
            alert("succes product sudah berhasil di tambah")
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    return(
        <Container fluid={true}>
        <Row>
            <Col lg="5" className="bg">

            </Col>
            <Col className="fedit" >
            <div className="edit">
            <div className="edit-title">Add Product</div>
                    <Form className="f-editproduct" onSubmit={addProductDb}>      
                        <FormGroup>
                            <Label>Picture: </Label>
                            <Input 
                            type="text"  
                            placeholder="Input Link"
                            onChange={insertPicure} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Product Name :</Label>
                            <Input type="text" placeholder="Input Product Name" onChange={insertProductName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Price :</Label>
                            <Input type="number" placeholder="Input Price" onChange={insertPrice}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Category :</Label>
                            <Input className="selectcategory" type="select" onChange={insertCategory}>
                            <option value="">Select your option</option>
                            <option value='1'>Coffee</option>
                            <option value='2'>Non-Coffee</option>
                            <option value='3'>Foods</option>
                            <option value='4'>Add-on</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label >Keterangan :</Label>
                            <Input className="ketadd"type="textarea" name="text" placeholder="Input Keterangan" onChange={insertKet}/>
                        </FormGroup>
                        <button className="tfe" onClick={cproduct}>Close</button>
                        <button type="submit" className="sbt">Submit</button>
                        </Form>
                </div>
            </Col>
            <Footer />
        </Row>
        </Container>
        
    )
}

export default Add