import { BakeryItemImage } from "../styles";

import { Link } from "react-router-dom";

const BakeryItem = (props) => {
  const bakery = props.bakery;
  return (
    <div>
      <Link to={`/bakeries/${bakery.slug}`}>
        <BakeryItemImage src={bakery.image} alt={bakery.name} />
      </Link>
      <p>{bakery.name}</p>
    </div>
  );
};

export default BakeryItem;
