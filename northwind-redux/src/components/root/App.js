import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/product' component={Dashboard}/>
        <Route exact path='/cart' component={CartDetail}/>
        <Route path='/saveproduct/:productId' component={AddOrUpdateProduct}/>
        <Route path='/saveproduct/' component={AddOrUpdateProduct}/>
        <Route component={NotFound}></Route>
      </Switch>
    </Container>
  );
}

export default App;
