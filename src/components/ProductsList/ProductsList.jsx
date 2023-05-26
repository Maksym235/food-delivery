import { useState, useEffect } from "react";
import { Conteiner, List } from "./ProductsList.styled";
import axios from "axios";
axios.defaults.baseURL = "https://food-delivery-api-maix.onrender.com";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ProductListItem } from "../ProductsListItem/ProductsListItem";
import PropTypes from "prop-types";
export function ProductsList({ selected }) {
  const [products, setProducts] = useState([]);
  const [selectedProductsId, setSelectedProductsId] = useLocalStorage("id", []);
  const [selectedProducts, setSelectedProducts] = useLocalStorage(
    "products",
    []
  );
  useEffect(() => {
    axios.get(`/${selected}`).then((resp) => {
      setProducts(resp.data.products);
    });
  }, [selected]);

  const onClick = (id) => {
    const product = products.find((item) => item._id === id);
    if (selectedProductsId.includes(id)) {
      setSelectedProductsId(selectedProductsId.filter((item) => item !== id));
      setSelectedProducts(selectedProducts.filter((item) => item._id !== id));
      return;
    }
    setSelectedProductsId((state) => [id, ...state]);
    setSelectedProducts((state) => [...state, product]);
  };
  return (
    <Conteiner>
      <List>
        {products.map((product) => {
          return (
            <li key={product._id}>
              <ProductListItem
                isInCart={selectedProductsId.includes(product._id)}
                onClick={onClick}
                product={product}
              />
            </li>
          );
        })}
      </List>
    </Conteiner>
  );
}

ProductsList.propTypes = {
  selected: PropTypes.string.isRequired,
};
