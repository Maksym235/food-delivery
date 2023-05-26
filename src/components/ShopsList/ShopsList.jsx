const shopsList = ["allShops", "burgers", "hotDogs", "pizzas"];
import { Conteiner, List } from "./ShopsList.styled";
import { useState } from "react";
import { ShopListItem } from "../ShopsListItem/ShopsListItem";
import PropTypes from "prop-types";
export function ShopsList({ handleSelect }) {
  const [selected, setSelected] = useState("allShops");

  const onSelect = (item) => {
    setSelected(item);
    handleSelect(item);
  };
  return (
    <Conteiner>
      <h1>Shops</h1>
      <List>
        {shopsList.map((item) => (
          <li key={item}>
            <ShopListItem
              active={selected === item}
              selected={selected}
              onSelect={onSelect}
              item={item}
            />
          </li>
        ))}
      </List>
    </Conteiner>
  );
}

ShopsList.propTypes = {
  handleSelect: PropTypes.func.isRequired,
};
