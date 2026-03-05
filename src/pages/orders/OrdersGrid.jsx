import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import OrderHeader from "./OrderHeader";
import OrderDetailsGrid from "./OrderDetailsGrid";

function OrdersGrid({ orders, loadCart }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetailsGrid order={order} loadCart={loadCart} />
          </div>
        );
      })}
    </div>
  );
}

export default OrdersGrid;
