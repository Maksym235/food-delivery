import { Footer, Conteiner, Total } from "./CartPageFooter.styled";
import PropTypes from "prop-types";
export function CartPageFooter({ totalPrice }) {
  return (
    <Footer>
      <Conteiner>
        <Total>total price: {totalPrice} </Total>
      </Conteiner>
    </Footer>
  );
}

CartPageFooter.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
