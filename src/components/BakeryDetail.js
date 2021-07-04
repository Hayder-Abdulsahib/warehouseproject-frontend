import { DetailWrapper } from "../styles";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import ProductList from "./ProductList";
import UpdateButton from "./buttons/UpdateButton";
import { getProductById } from "../store/utils";
import { Link } from "react-router-dom";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();

  const bakery = useSelector((state) =>
    state.bakeries.bakeries.find((_bakery) => _bakery.slug === bakerySlug)
  );

  const products = useSelector((state) => state.products.products);

  if (!bakery) return <Redirect to="/bakeries" />;

  const listOfProducts = bakery.products.map((product) =>
    getProductById(product.id, products)
  );

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{bakery.name}</h4>
          <img src={bakery.image} />

          <Link to={`/bakeries/${bakery.id}/products/new`}>
            <button>Add Product</button>
          </Link>
        </DetailWrapper>
      </div>
      <div className="col-12">
        <ProductList products={listOfProducts} />
      </div>
    </div>
  );
};

export default BakeryDetail;
