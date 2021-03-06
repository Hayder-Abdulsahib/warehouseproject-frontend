import { Route, Switch } from "react-router";

import Home from "./Home";
import ProductDetail from "./ProductDetail";
import ProductForm from "./forms/ProductForm";
import ProductList from "./ProductList";
import BakeryList from "./BakeryList";
import BakeryDetail from "./BakeryDetail";
import Signup from "./forms/Signup";
import Signin from "./forms/Signin";

const Routes = (props) => {
  return (
    <Switch>
      <Route
        path={[
          "/bakeries/:bakerySlug/products/new",
          "/products/:productSlug/edit",
        ]}
      >
        <ProductForm />
      </Route>

      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>
      <Route path="/bakeries">
        <BakeryList />
      </Route>

      <Route path="/products/:productSlug">
        <ProductDetail />
      </Route>

      <Route path="/products">
        <ProductList products={props.products} />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
