import { Conteiner, List, ListItem } from "./OrdersHistoryList.styled";
import { OrdersHistoryListItem } from "../OrdersHistoryListItem/OrderHistoryListItem";
import { useLocalStorage } from "../hooks/useLocalStorage";
export function OrderHistory() {
  const [orders] = useLocalStorage("orders", null);

  return (
    <Conteiner>
      <List>
        {orders &&
          orders.map((order) => (
            <ListItem key={order.email}>
              <OrdersHistoryListItem order={order} />
            </ListItem>
          ))}
      </List>
    </Conteiner>
  );
}
