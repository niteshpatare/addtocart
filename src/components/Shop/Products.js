import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";
const Products = (props) => {
  const productItemsList = useSelector((state) => state.productRed.products);
  const productItems = [
    {
      id: 1,
      title: "Producst 1",
      price: 6,
      description: "This is a first product - amazing!",
      quantity: 1,
    },
    {
      id: 2,
      title: "Producst 2",
      price: 3,
      description: "This is a second product - amazing!",
      quantity: 1,
    },
    {
      id: 3,
      title: "Producst 3",
      price: 2,
      description: "This is a third product - amazing!",
      quantity: 1,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItemsList.map((item) => {
          console.log(item);
          return (
            <ProductItem
              key={item.idMeal}
              id={item.idMeal}
              title={item.strMeal}
              price={item.price}
              description={item.strInstructions}
              quantity={item.quantity}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
