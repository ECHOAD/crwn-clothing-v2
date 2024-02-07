import CheckoutItems from "../../components/checkout-items/checkout-items.components";
import CheckoutDetail from "../../components/checkout-detail/checkout-detail.component";


import "./checkout.styles.scss";
const CheckOut = () => {

  return (
    <>
      <h1>Checkout</h1>
      <div className="checkout-content">
        <section className="items-section">
          <CheckoutItems  />
        </section>
        <section className="detail-section">
          <CheckoutDetail />
        </section>
      </div>
    </>
  );
};

export default CheckOut;
