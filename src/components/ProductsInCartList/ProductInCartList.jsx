import { Conteiner, List } from "./ProductsInCartList.styled";
import { ProductsInCartListItem } from "../ProductsInCartListItem/ProductsInCartListItem";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
export function ProductInCartList({ setTotal }) {
  const [products, setProducts] = useLocalStorage("products", []);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalItem = products.reduce((prev, product) => {
      return (prev += product.quantity * product.price);
    }, 0);
    setTotalPrice(totalItem);
    setTotal(totalPrice);
  }, [products, setTotal, totalPrice]);

  const setQuantity = (id, quantity) => {
    const product = products.find((product) => product._id === id);
    product.quantity = Number(quantity);
    setProducts((state) => [...state]);
  };
  return (
    <Conteiner>
      <List>
        {products &&
          products.map((product) => {
            return (
              <li key={product._id}>
                <ProductsInCartListItem
                  setQuantityProduct={setQuantity}
                  product={product}
                />
              </li>
            );
          })}
      </List>
    </Conteiner>
  );
}

ProductInCartList.propTypes = {
  setTotal: PropTypes.func.isRequired,
};
