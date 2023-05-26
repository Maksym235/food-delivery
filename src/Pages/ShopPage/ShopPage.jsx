import { useState } from "react";

import { Conteiner } from "./ShopPage.styled";
import { ShopsList } from "../../components/ShopsList/ShopsList";
import { ProductsList } from "../../components/ProductsList/ProductsList";
export default function ShopPage() {
  const [selected, setSelected] = useState("allShops");
  const handleSelect = (select) => {
    setSelected(select);
  };
  return (
    <Conteiner>
      <ShopsList handleSelect={handleSelect} />
      <ProductsList selected={selected} />
    </Conteiner>
  );
}
