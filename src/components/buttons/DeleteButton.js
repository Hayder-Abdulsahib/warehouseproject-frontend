import { deleteProduct } from "../../store/actions/productActions";
import { useDispatch } from "react-redux";

const DeleteButton = ({ productId }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-outline-danger"
      onClick={() => dispatch(deleteProduct(productId))}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
