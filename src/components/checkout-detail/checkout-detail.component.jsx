import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutDetailTable,
  CheckoutDetailTableHead,
  CheckoutDetailTableData,
  CheckoutTotal,
} from "./checkout-detail.styles";
const CheckoutDetail = () => {
  const { items, total } = useContext(CartContext);

  return (
    <CheckoutDetailTable>
      <CheckoutDetailTableHead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </CheckoutDetailTableHead>
      <tbody>
        {items.map((cartItem) => {
          const { id, name, price, quantity } = cartItem;
          return (
            <tr key={id}>
              <CheckoutDetailTableData>{name}</CheckoutDetailTableData>
              <CheckoutDetailTableData>
                ${quantity * price}
              </CheckoutDetailTableData>
            </tr>
          );
        })}
        <CheckoutTotal>
          <CheckoutDetailTableData>Total</CheckoutDetailTableData>
          <CheckoutDetailTableData>${total}</CheckoutDetailTableData>
        </CheckoutTotal>
      </tbody>
    </CheckoutDetailTable>
  );
};

// <table className="table-checkout-detail">
// <thead>
//   <tr>
//     <th>Product</th>
//     <th>Price</th>
//   </tr>
// </thead>
// <tbody>
//   {items.map((cartItem) => {
//     const { id, name, price, quantity } = cartItem;
//     return (
//       <tr key={id}>
//         <td>{name}</td>
//         <td>${quantity * price}</td>
//       </tr>
//     );
//   })}
//   <tr className="total">
//     <td>Total</td>
//     <td>${total}</td>
//   </tr>
// </tbody>
// </table>

export default CheckoutDetail;
