import { Btn } from "./ShopsListItem.styled";
import PropTypes from "prop-types";
export function ShopListItem({ item, onSelect, active }) {
  const onClick = () => {
    onSelect(item);
  };
  return (
    <Btn active={active} type="button" onClick={onClick}>
      {item}
    </Btn>
  );
}

ShopListItem.propTypes = {
  item: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  active: PropTypes.bool,
};
