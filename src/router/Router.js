import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import History from '../pages/History'
import Detail from '../pages/DetailProduct'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Details from '../pages/DetailProduct'
import Guard from './Guard'

const Router = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/Register">
                <Register />
            </Route>

            <Guard path="/Product" component={Product} />
            <Guard path="/Details" component={Details} />
            <Guard path="/Detail" component={Detail} />
            <Guard path="/Cart" component={Cart} />
            <Guard path="/History" component={History} />
            <Guard path="/Product" component={Product} />
        </Switch>
        
    )
}

export default Router