import '../css/EditDetail.css'
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
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'


const Edit = () => {
    const API_URL = 'http://18.206.120.211:8000'
    const data = localStorage.getItem('cart')
    const token = localStorage.getItem('token')
    const dataproduct = JSON.parse(data)
    const id = dataproduct.id_product

    const history = useHistory()
    const cproduct = () => {
        history.push('/product')
    }

    const deleteProduct = () => {
        axios.delete(`${API_URL}/product/${id}`, { headers: { token: token} })
        .then(function (response) {
            // handle success
            localStorage.removeItem('cart')
            history.push('/product')
            alert('Delete product succes')
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    const [DataEdit, setDataEdit] = useState({
        picture: dataproduct.picture,
        product_name: dataproduct.product_name,
        price: dataproduct.price,
        category: dataproduct.category,
        ket: dataproduct.ket
    })

    const editPicture = (e) => {
        setDataEdit({
            ...DataEdit,
            picture: e.target.value
          })
    }
    const editProductName = (e) => {
        setDataEdit({
            ...DataEdit,
            product_name: e.target.value
          })
    }
    const editPrice = (e) => {
        setDataEdit({
            ...DataEdit,
            price: e.target.value
          })
    }
    const editCategory = (e) => {
        setDataEdit({
            ...DataEdit,
            category: e.target.value
          })
    }
    const editKet = (e) => {
        setDataEdit({
            ...DataEdit,
            ket: e.target.value
          })
    }

    const editProductDb = (e) => {
        e.preventDefault();
        axios.put(`${API_URL}/product/${id}`, DataEdit, { headers: { token: token} })
        .then(function (response) {
            // handle success
            alert("succes product sudah berhasil di update")
            history.push('/product')
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
    return(
        <Container fluid={true}>
        <Row>
            <Col lg="5" className="bge">

            </Col>
            <Col className="fedit" >
            <div className="edit">
            <div className="edit-title">Edit Product</div>
                    <Form className="f-editproduct" onSubmit={editProductDb}>      
                        <FormGroup>
                            <Label>Picture: </Label>
                            <Input 
                            type="text"  
                            placeholder="Input Link"
                            value={DataEdit.picture} 
                            onChange={editPicture}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Product Name :</Label>
                            <Input 
                            type="text" 
                            placeholder="Input Product Name" 
                            value={DataEdit.product_name}
                            onChange={editProductName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Price :</Label>
                            <Input 
                            type="number" 
                            placeholder="Input Price" 
                            value={DataEdit.price}
                            onChange={editPrice}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Category :</Label>
                            <Input className="selectcategory" type="select" onChange={editCategory} >
                            <option value=''>{DataEdit.category} (Select catagory Again)</option>
                            <option value='1'>Coffee</option>
                            <option value='2'>Non-Coffee</option>
                            <option value='3'>Foods</option>
                            <option value='4'>Add-on</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label >Keterangan :</Label>
                            <Input 
                            className="ketadd" 
                            type="textarea" 
                            name="text" 
                            placeholder="Input Keterangan" 
                            value={DataEdit.ket}
                            onChange={editKet}/>
                        </FormGroup>
                        <button className="tfe" onClick={cproduct}>Close</button>
                        <button type="submit" className="sbt">Submit</button>
                        <div className="dte" onClick={deleteProduct}>Delete</div>
                        </Form>
                </div>
            </Col>
            <Footer />
        </Row>
        </Container>
        
    )
}

export default Edit