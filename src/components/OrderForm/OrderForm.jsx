import { useLocalStorage } from "../hooks/useLocalStorage";
import { Form, Label, Input, Button } from "./OrderForm.styled";
import axios from "axios";
import PropTypes from "prop-types";
axios.defaults.baseURL = "https://food-delivery-api-maix.onrender.com";

export function OrderForm({ totalPrice }) {
  const [orders, setOrders] = useLocalStorage("orders", []);
  const addOrder = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const selectedProducts = JSON.parse(localStorage.getItem("products"));
    const NewOrder = {
      name: evt.target.name.value,
      email: evt.target.email.value,
      phone: evt.target.phone.value,
      address: evt.target.address.value,
      selected: selectedProducts,
      totalPrice: totalPrice,
    };
    try {
      axios.post("/orders", NewOrder);
      alert("Success", orders);
      form.reset();
      setOrders((state) => [...state, NewOrder]);
      localStorage.setItem("products", JSON.stringify([]));
      localStorage.setItem("id", JSON.stringify([]));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Form onSubmit={addOrder}>
      <Label>
        Name
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Number
        <Input type="tel" name="phone" />
      </Label>
      <Label>
        Address
        <Input type="text" name="address" />
      </Label>
      <Button type="submit">Create order</Button>
    </Form>
  );
}

OrderForm.propTypes = {
  totalPrice: PropTypes.number,
};
