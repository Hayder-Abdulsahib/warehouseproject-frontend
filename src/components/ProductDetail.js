import { Redirect, useParams } from "react-router-dom";

// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useSelector } from "react-redux";
import UpdateButton from "./buttons/UpdateButton";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.slug === productSlug)
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <UpdateButton slug={product.slug} />
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default ProductDetail;
