import { Conteiner } from "./HistoryPage.styled";
import { FormToGetOrdersHistory } from "../../components/FormToGetOrdersHistory/FormToGetOrdersHistory";
import { OrderHistory } from "../../components/OrdersHistoryList/OrdersHistoryList";
export default function HistoryPage() {
  return (
    <Conteiner>
      <h1>History Page</h1>
      <FormToGetOrdersHistory />
      <OrderHistory />
    </Conteiner>
  );
}
