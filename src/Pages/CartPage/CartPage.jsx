import { Conteiner } from "./CartPage.styled";

import { OrderForm } from "../../components/OrderForm/OrderForm";
import { ProductInCartList } from "../../components/ProductsInCartList/ProductInCartList";
import { CartPageFooter } from "../../components/CartPageFooter/CartPageFooter";
import { useState } from "react";

export default function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);

  const setTotal = (total) => {
    setTotalPrice(total);
  };
  return (
    <>
      <Conteiner>
        <OrderForm totalPrice={totalPrice} />
        <ProductInCartList setTotal={setTotal} />
      </Conteiner>
      <CartPageFooter totalPrice={totalPrice} />
    </>
  );
}
