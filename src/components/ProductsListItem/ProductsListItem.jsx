import {
  Conteiner,
  Wrapper,
  Img,
  Name,
  Price,
  Btn,
} from "./ProductListItem.styled";
import PropTypes from "prop-types";
export function ProductListItem({
  product: { name, price, _id },
  onClick,
  isInCart,
}) {
  const addToOrder = () => {
    onClick(_id);
  };
  return (
    <Conteiner>
      <Wrapper>
        <Img></Img>
        <Name>{name}</Name>
        <Price>{price}</Price>
        <Btn isInCart={isInCart} type="button" onClick={addToOrder}>
          {isInCart ? "In cart" : "Add to cart"}
        </Btn>
      </Wrapper>
    </Conteiner>
  );
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isInCart: PropTypes.bool,
};
