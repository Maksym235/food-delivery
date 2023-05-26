import { useState } from "react";
import {
  Conteiner,
  Wrapper,
  Img,
  Name,
  Price,
  Input,
} from "./ProductsInCartListItem.styled";
import PropTypes from "prop-types";
export function ProductsInCartListItem({
  product: { quantity, _id, name, price },
  setQuantityProduct,
}) {
  quantity = 1;
  const [count, setCount] = useState(quantity);
  quantity = count;

  const changeCount = (evt) => {
    setCount(evt.target.value);
    setQuantityProduct(_id, quantity);
  };

  return (
    <Conteiner>
      <Wrapper>
        <Img></Img>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Input
          type="number"
          min="1"
          max="100"
          step="1"
          value={quantity}
          onChange={changeCount}
        />
      </Wrapper>
    </Conteiner>
  );
}

ProductsInCartListItem.propTypes = {
  product: PropTypes.object.isRequired,
  setQuantityProduct: PropTypes.func.isRequired,
};
