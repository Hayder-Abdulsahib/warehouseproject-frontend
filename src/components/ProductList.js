import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
//react
import { useState } from "react";
import { useHistory } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

const ProductList = ({ products }) => {
  const user = useSelector((state) => state.auth.user);
  const [query, setQuery] = useState("");
  const history = useHistory();
  if (!user) history.push("/");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;
