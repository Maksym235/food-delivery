import {
  Conteiner,
  List,
  Item,
  Text,
  Total,
} from "./OrderHitoryListItem.styled";
import PropTypes from "prop-types";
export function OrdersHistoryListItem({ order }) {
  const { selected } = order;
  return (
    <Conteiner>
      <List>
        {selected.map(({ _id, name, price, quantity }) => (
          <Item key={_id}>
            <Text>name: {name}</Text>
            <Text>price: {price}</Text>
            <Text>quantity: {quantity}</Text>
          </Item>
        ))}
      </List>
      <Total>total</Total>
    </Conteiner>
  );
}

OrdersHistoryListItem.propTypes = {
  order: PropTypes.object.isRequired,
};
