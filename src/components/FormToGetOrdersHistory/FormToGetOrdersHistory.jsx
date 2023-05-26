import { Form, Input, Label, Button } from "./FormToGetOrdersHistory.styled";

export function FormToGetOrdersHistory() {
  return (
    <Form>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Phone
        <Input type="tel" name="phone" />
      </Label>
      <Button type="submit">Search</Button>
    </Form>
  );
}
