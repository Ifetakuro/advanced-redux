import { useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { addToCart } from "../../store/cartSlice";

const Products = (props) => {
  const products = [
    {
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
      id: "testId1",
      quantity: 1,
    },
    {
      title: "Test2",
      price: 8,
      description: "This is a second product - fantastic!",
      id: "testId2",
      quantity: 1,
    },
    {
      title: "Test3",
      price: 5,
      description: "This is a thirs product - fabulous!",
      id: "testId3",
      quantity: 1,
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (payload) => {
    dispatch(addToCart(payload));
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            product={product}
            onAddToCart={() => addToCartHandler(product)}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
